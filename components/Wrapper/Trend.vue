<template>
  <div>
<!--    <h4 class="card-title"><strong>銷售趨勢</strong></h4>-->
    <div class="row">
      <div class="col-md-8 col-lg-8">
        <div
          class="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden"
        >
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">銷售趨勢</h4>
            </div>
          </div>
          <div class="iq-card-body">
            <div id="home-chart-02">
              <ChartsLine1 />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-4">
        <div
          class="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden"
        >
          <div class="iq-card-header d-flex justify-content-between">
            <div class="iq-header-title">
              <h4 class="card-title">新舊客統計</h4>
            </div>
          </div>
          <div class="iq-card-body">
            <CountsAutocounter/>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Autocounter from "../Counts/Autocounter";
export default {
  name: "Trend",
  components: { Autocounter }
};
</script>

<style scoped>

</style>
