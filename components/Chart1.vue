<script lang="ts">
import { defineComponent, h, PropType } from 'vue'

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Plugin,
  Filler,
  BorderRadius,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line,
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart',
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: '',
      type: String,
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {},
    },
    plugins: {
      type: Array as PropType<Plugin<'line'>[]>,
      default: () => [],
    },
  },
  setup(props) {
    const chartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: '訂單總金額',
          data: [12, 9, 7, 8, 5],
          pointBackgroundColor: '#6546D2',
          cubicInterpolationMode: 'monotone',
          // fill: 1,
          // stepped: true,
          borderColor: '#827af3',
          // tension: 0.1,
          strokeColor: '#827af3',
          fillColor: '#827af3',
          pointStrokeColor: '#827af3',
        },
        {
          label: '訂單數量',
          borderColor: '#27b345',
          pointBackgroundColor: '#27b345',
          borderWidth: 1,
          radius: 0,
          fill: true,
          pointBorderColor: '#27b345',
          // backgroundColor: (ctx) => {
          //   const canvas = ctx.chart.ctx;
          //   const gradient = canvas.createLinearGradient(0,0,0,160);
          //
          //   gradient.addColorStop(0, 'white');
          //   gradient.addColorStop(.5, 'cyan');
          //   gradient.addColorStop(1, 'green');
          //
          //   return gradient;
          // },
          // tension: 0.25,
          data: [2, 1, 3.5, 7, 3],
        },
      ],
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        filler: {
          propagate: true,
        },
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)',
        },
        usePointStyle: true,
      },
      // scales: {
      //   x: {
      //     grid: {
      //       display: false,
      //     },
      //   },
      //
      //   y: {
      //     grid: {
      //       display: false,
      //       // color: 'rgba(217,143,7,0.1)',
      //     },
      //   },
      // },
    }

    return () =>
      h(Line, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      })
  },
})
</script>
