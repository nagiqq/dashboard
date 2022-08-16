<template>
<div class="todo">
  <h4 class="card-title m-3"><strong>代辦事項</strong></h4>
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-3">
      <div class="iq-card iq-card-block iq-card-stretch">
        <div class="iq-card-body">
          <div
            class="d-flex d-flex align-items-center justify-content-between"
          >
            <div>
              <h2>88</h2>
              <p class="fontsize-sm m-0">新訂單</p>
            </div>
            <div
              class="rounded-circle iq-card-icon dark-icon-light iq-bg-primary"
            >
              <i class="ri-inbox-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
      <div class="iq-card iq-card-block iq-card-stretch">
        <div class="iq-card-body">
          <div
            class="d-flex d-flex align-items-center justify-content-between"
          >
            <div>
              <h2>101</h2>
              <p class="fontsize-sm m-0">待出貨</p>
            </div>
            <div class="rounded-circle iq-card-icon iq-bg-danger">
              <i class="ri-radar-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
      <div class="iq-card iq-card-block iq-card-stretch">
        <div class="iq-card-body">
          <div
            class="d-flex d-flex align-items-center justify-content-between"
          >
            <div>
              <h2>22</h2>
              <p class="fontsize-sm m-0">待付款</p>
            </div>
            <div class="rounded-circle iq-card-icon iq-bg-warning">
              <i class="ri-price-tag-3-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-3">
      <div class="iq-card iq-card-block iq-card-stretch">
        <div class="iq-card-body">
          <div
            class="d-flex d-flex align-items-center justify-content-between"
          >
            <div>
              <h2>10</h2>
              <p class="fontsize-sm m-0">訂單詢問</p>
            </div>
            <div class="rounded-circle iq-card-icon iq-bg-info">
              <i class="ri-refund-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Todo"
};
</script>

<style scoped>

</style>
