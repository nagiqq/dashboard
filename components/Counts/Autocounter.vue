<script>
// import ReactiveChart from '@/components/reactiveChart'
import LvProgressBar from 'lightvue/progress-bar'
import Vue3Autocounter from 'vue3-autocounter'

export default {
  components: {
    LvProgressBar: LvProgressBar,
    'vue3-autocounter': Vue3Autocounter,
  },
  data() {
    return {
      value: 0,
      number: 0,
    }
  },
  interval: null,
  methods: {
    startProgress() {
      this.interval = setInterval(() => {
        let newValue = 80
        if (newValue >= 100) {
          newValue = 0
        }
        this.value = newValue
      }, 2000)
    },
    endProgress() {
      clearInterval(this.interval)
      this.interval = null
    },
  },
  mounted() {
    this.startProgress()
  },
  beforeDestroy() {
    this.endProgress()
  },
}
</script>
<template>
  <div>
    <div class="iq-card-body m-3">
      <div class="p-3 bg-primary dark-icon b-3 rounded position-relative">
        <div class="d-flex align-items-center justify-content-between">
          <div
            class="icon iq-icon-box bg-primary dark-icon rounded border"
            data-wow-delay="0.2s"
          >
            <i class="ri-user-fill"></i>
          </div>
          <div class="ml-2">
            <a href="javascript:void();" class="d-flex align-items-center mr-4">
              <span class="bg-white p-1 rounded mr-2"></span>
              <p class="text-white mb-0">新買家</p>
            </a>
            <div id="progress-chart-1"></div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center pb-3">
        <div class="col-lg-6">
          <div class="ml-2">
            <h5 class="m-2">營業額</h5>
            <span class="h4 text-dark mb-0 counter d-inline-block w-100">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="60586"
                :duration="2"
                separator=","
                decimalSeparator="."
                :autoinit="true"
                @finished="alert(`Counting finished!`)"
            /></span>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="d-flex align-items-center justify-content-between mt-4 position-relative"
          >
            <div
              class="iq-progress-bar bg-primary-light mt-3 iq-progress-bar-icon"
            >
              <span
                class="iq-progress progress-1 position-relative"
                style="transition: width 2s ease 0s; width: 100%"
              >
                <LvProgressBar
                  :value="value"
                  color="#6546D2"
                  :showValue="false"
                />
                <span class="progress-text text-primary">67%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="iq-card-body m-3">
      <div class="p-3 bg-info dark-icon b-3 rounded position-relative">
        <div class="d-flex align-items-center justify-content-between">
          <div
            class="icon iq-icon-box bg-info dark-icon rounded border"
            data-wow-delay="0.2s"
          >
            <i class="ri-user-fill"></i>
          </div>
          <div class="ml-2">
            <a href="javascript:void();" class="d-flex align-items-center mr-4">
              <span class="bg-white p-1 rounded mr-2"></span>
              <p class="text-white mb-0">回購買家</p>
            </a>
            <div id="progress-chart-1"></div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center pb-3">
        <div class="col-lg-6">
          <div class="ml-2">
            <h5 class="m-2">營業額</h5>
            <span class="h4 text-dark mb-0 counter d-inline-block w-100">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="45395"
                :duration="3"
                separator=","
                decimalSeparator="."
                :autoinit="true"
                @finished="alert(`Counting finished!`)"
            /></span>
          </div>
        </div>
        <div class="col-lg-6">
          <div
            class="d-flex align-items-center justify-content-between mt-4 position-relative"
          >
            <div
              class="iq-progress-bar bg-info-light mt-3 iq-progress-bar-icon"
            >
              <span
                class="iq-progress progress-1 position-relative bar-info"
                style="transition: width 2s ease 0s; width: 100%"
              >
                <LvProgressBar
                  :value="value"
                  color="#17A2B8"
                  :showValue="false"
                />
                <span class="progress-text text-info">50%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.Chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin: 25px 0;
}

.Chart h2 {
  margin-top: 0;
  padding: 15px 0;
  color: rgba(255, 0, 0, 0.5);
  border-bottom: 1px solid #323d54;
}

.lv-progressbar {
  height: 0.5em !important;
}

.lv-progressbar {
  overflow: visible !important;
}

.lv-progressbar__value--animate::after {
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #6d73f6;
  position: absolute;
  bottom: -3px;
  right: -2px;
}
.bar-info > .lv-progressbar > .lv-progressbar__value--animate::after {
  border: 3px solid #17A2B8!important;
}
</style>
