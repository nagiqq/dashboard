<template>
  <div class="Day">
    <div class="iq-card-header d-flex justify-content-center">
      <div class="iq-header-title">
        <h3 class="card-title">{{ currentDate() }}</h3>
      </div>
    </div>
    <div class="iq-card-body">
      <WrapperData />
      <WrapperTrend />
    </div>
    <div class="iq-card-body">
      <div class="row">
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
      }-${current.getDate()} ~ ${current.getMonth() + 1
      }-${current.getDate() + 7} `
      return date
    },
  },
}
</script>

<style scoped></style>
