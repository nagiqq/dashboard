<script>
import 'v-calendar/dist/style.css'
import VCalendar from 'v-calendar'
import { SetupCalendar } from 'v-calendar';
import { Calendar, DatePicker } from 'v-calendar'
// composable
// meta
definePageMeta({
  layout: 'page',
})
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
  },
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      date: null,
      mode: "datetime",
      cur: 0,
    }
  },
}
</script>

<template>
  <div id="content-page" class="content-page">
    <div class="container-fluid">
      <WrapperTodo />

      <!--      tab start-->
      <div class="iq-card">
<!--        <Calendar/>-->
        <div class="iq-card-body">
          <ul class="nav nav-pills mb-3 justify-content-end">
            <li class="nav-item">
              <a class="nav-link" @click="cur = 0" :class="{ active: cur == 0 }"
                >日</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="cur = 1" :class="{ active: cur == 1 }"
                >周</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="cur = 2" :class="{ active: cur == 2 }"
                >月</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="cur = 3" :class="{ active: cur == 3 }"
                >年</a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div v-show="cur == 0">
              <TabsDay />
            </div>
            <div v-show="cur == 1">
              <TabsWeek />
            </div>
            <div v-show="cur == 2">
              <TabsMonth />
            </div>
            <div v-show="cur == 3">
              <TabsYear />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    tab end-->
    <WrapperSales />
  </div>
</template>

<style lang="scss"></style>
