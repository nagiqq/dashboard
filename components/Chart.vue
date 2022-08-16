<script lang="ts">
import { defineComponent, ref, h, onMounted, PropType } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin,
  ChartData
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: "ReactiveChart",
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart"
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: "",
      type: String
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {
      }
    },
    plugins: {
      type: Array as PropType<Plugin<"bar">[]>,
      default: () => []
    }
  },
  setup(props) {
    const chartData = ref<ChartData<"bar">>({
      datasets: []
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0)',
          bodyColor: '#000',
          titleColor: '#000',
          footerColor: '#000',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: '10'
        }
      },
      legend: {
        display: true,
        labels: {
          color: '#FF0000',
        },
        usePointStyle: true
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },

        y: {
          grid: {
            display: false
            // color: 'rgba(217,143,7,0.1)',
          }
        }
      }
    };

    function fillData() {
      const updatedChartData = {
        labels: [
          "January" + getRandomInt(),
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Revenue",
            backgroundColor: "rgb(108, 230, 244)",
            data: [37, 26, 31, 33, 11, 11, 33, 45, 45, 11, 24, 12]
          },
          {
            label: "Profit",
            backgroundColor: "rgb(130, 122, 243)",
            data: [37, 11, 31, 55, 11, 11, 64, 14, 76, 51, 14, 12]
          }
        ]
      };

      chartData.value = { ...updatedChartData };
    }

    function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }

    onMounted(() => {
      setInterval(() => {
        fillData();
      }, 2000);
    });

    return () =>
      h(Bar, {
        chartData: chartData.value,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      });
  }
});
</script>
