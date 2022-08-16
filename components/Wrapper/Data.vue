<template>
  <div>
    <h4 class="card-title m-2"><strong>指標數據</strong></h4>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>訂單總金額</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><span class="counter"><b>143,830</b><small>(NT$)</small></span></h2>
                <p class="mb-0 text-secondary line-height"> 26.84% </p>
              </div>
              <div class="iq-iconbox iq-bg-danger">
                <i class="ri-arrow-down-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar mt-5">
              <span class="bg-danger" data-percent="80"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>訂單總數</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><span class="counter"><b>200</b><small>(筆)</small></span></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 8.64% </p>
              </div>
              <div class="iq-iconbox iq-bg-info">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar mt-5">
              <span class="bg-info" data-percent="50"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>平均客單價</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><span class="counter"><b>720</b><small>(NT$)</small></span></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 0.86% </p>
              </div>
              <div class="iq-iconbox iq-bg-success">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar mt-5">
              <span class="bg-success" data-percent="66"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
          <div class="iq-card-body">
            <div class="text-center"><span>退貨率</span></div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="value-box">
                <h2 class="mb-0"><span class="counter"><b>1</b><small>(%)</small></span></h2>
                <p class="mb-0 pl-2 text-secondary line-height"> 25.5% </p>
              </div>
              <div class="iq-iconbox iq-bg-primary">
                <i class="ri-arrow-up-line"></i>
              </div>
            </div>
            <div class="iq-progress-bar mt-5">
              <span class="bg-primary" data-percent="70"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data"
};
</script>

<style scoped>

</style>
