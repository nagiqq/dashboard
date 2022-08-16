<template>
  <div className="Day">
    <div className="iq-card-header d-flex justify-content-center">
      <div className="iq-header-title">
        <h3 className="card-title">{{ currentDate() }}</h3>
      </div>
    </div>
    <div className="iq-card-body">
      <WrapperData />
      <WrapperTrend />
    </div>
    <div className="iq-card-body">
      <div className="row">
        <WrapperOrder />
        <WrapperDistrict />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date()
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()} ~ ${current.getMonth() + 2
      }-${current.getDate()} `
      return date
    },
  },
}
</script>

<style scoped></style>
