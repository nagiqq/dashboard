<template>
  <div class="iq-sidebar" :class="{ active: isActive }">
    <div class="drawer-container">
      <div
        class="drawer-container__wrapper --absolute iq-sidebar-logo d-flex justify-content-between"
      >
        <div class="wrapper__card">
          <div class="card__header">
            <div
              class="iq-light-logo header__icon"
              @click="isActive = !isActive"
            >
              <img src="assets/images/logo.gif" class="img-fluid" alt="" />
              <span v-if="!isActive">歐悅集團<br />科學分析</span>

              <!--              <div class="iq-menu-bt-sidebar">-->
              <!--                <div class="iq-menu-bt align-self-center">-->
              <!--                  <div class="wrapper-menu">-->
              <!--                    <i class="ri-arrow-left-s-line"></i>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->
            </div>
          </div>
          <div class="card__drawer">
            <div id="sidebar-scrollbar">
              <nav class="iq-sidebar-menu">
                <ul id="iq-sidebar-toggle" class="iq-menu">
                  <li class="iq-menu-title">
                    <i class="ri-subtract-line"></i><span>各事業體</span>
                  </li>
                  <li>
                    <a href="#" @click="isOpenA = !isOpenA"
                      ><i class="ri-home-4-line"></i><span>商城</span
                      ><i
                        class="ri-arrow-right-s-line iq-arrow-right"
                        v-if="!isOpenA"
                      ></i
                      ><i class="ri-arrow-down-s-line" v-else="!isOpenA"></i
                    ></a>
                    <ul id="menu-design" v-if="isOpenA">
                      <!--                        打不開-->
                      <li>
                        <NuxtLink to="/page1" class="iq-waves-effect"
                          ><i class="ri-bar-chart-2-line"></i>訂單統計
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/page2" class="iq-waves-effect"
                          ><i class="ri-bar-chart-line"></i>商品統計
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/page3" class="iq-waves-effect"
                          ><i class="ri-award-fill"></i>優惠成效
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/page4" class="iq-waves-effect"
                          ><i class="ri-briefcase-2-line"></i>金流分析
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/page5" class="iq-waves-effect"
                          ><i class="ri-folder-chart-2-line"></i>物流分析
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/page6" class="iq-waves-effect"
                          ><i class="ri-git-commit-line"></i>營運報表
                        </NuxtLink>
                      </li>
                      <!--                        打不開-->
                    </ul>
                  </li>
                  <li>
                    <a href="#" @click="isOpenB = !isOpenB"
                      ><i class="ri-home-3-line"></i><span>住宿</span
                      ><i
                        class="ri-arrow-right-s-line iq-arrow-right"
                        v-if="!isOpenB"
                      ></i
                      ><i class="ri-arrow-down-s-line" v-else="!isOpenB"></i
                    ></a>
                    <ul id="menu-design" v-show="isOpenB">
                      <!--                        打不開-->
                      <li>
                        <a href="index.html"
                          ><i class="ri-hotel-bed-fill"></i>即時房況</a
                        >
                      </li>
                      <li>
                        <a href="index.html"
                          ><i class="ri-bar-chart-horizontal-line"></i
                          >訂房分析</a
                        >
                      </li>
                      <li>
                        <a href="index.html"
                          ><i class="ri-shield-star-fill"></i>優惠成效</a
                        >
                      </li>

                      <!--                        打不開-->
                    </ul>
                  </li>
                  <li>
                    <a href="#" @click="isOpenC = !isOpenC"
                      ><i class="ri-wallet-line"></i><span>金融服務</span
                      ><i
                        class="ri-arrow-right-s-line iq-arrow-right"
                        v-if="!isOpenC"
                      ></i
                      ><i class="ri-arrow-down-s-line" v-else="!isOpenC"></i
                    ></a>
                    <ul id="menu-design" v-show="isOpenC">
                      <!--                        打不開-->
                      <li>
                        <a href="index.html"
                          ><i class="ri-bank-card-2-fill"></i>租賃</a
                        >
                      </li>
                      <li>
                        <a href="index.html"
                          ><i class="ri-bank-line"></i>借貸</a
                        >
                      </li>
                      <!--                        打不開-->
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      ><i
                        class="ri-subway-fill"
                        :style="{ color: '#8c91b6' }"
                      ></i
                      ><span :style="{ color: '#8c91b6' }">農牧買賣</span></a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      ><i
                        class="ri-reactjs-fill"
                        :style="{ color: '#8c91b6' }"
                      ></i
                      ><span :style="{ color: '#8c91b6' }">能源認購</span></a
                    >
                  </li>

                  <li class="iq-menu-title">
                    <i class="ri-subtract-line"></i><span>會員管理</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      ><i
                        class="ri-profile-line"
                        :style="{ color: '#8c91b6' }"
                      ></i
                      ><span :style="{ color: '#8c91b6' }">會員結構</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      ><i
                        class="ri-layout-line"
                        :style="{ color: '#8c91b6' }"
                      ></i
                      ><span :style="{ color: '#8c91b6' }">會員活動數據</span>
                    </a>
                  </li>

                  <li class="iq-menu-title">
                    <i class="ri-subtract-line"></i><span>行銷成效</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      ><i
                        class="ri-home-8-line"
                        :style="{ color: '#8c91b6' }"
                      ></i
                      ><span :style="{ color: '#8c91b6' }">全站行銷成效</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="p-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isOpenA: false,
      isOpenB: false,
      isOpenC: false,
    }
  },
}
</script>

<style lang="scss" scoped>
a.router-link-active {
  background-color: var(--iq-primary);
  color: var(--iq-white) !important;
}

a.router-link-active > i {
  color: var(--iq-white);
}

a.router-link-active:hover {
  background-color: var(--iq-primary) !important;
}

a.router-link-active > i:hover {
  color: var(--iq-white);
}

.iq-sidebar.active {
  //padding-left: 10px;
  width: 70px;
}

.drawer-container {
  height: 100%;
  width: 100%;
  margin: auto;

  .drawer-container__wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    .list {
      display: flex;
      flex-direction: column;

      & > div {
        padding: 10px 15px;
        color: black;
        cursor: pointer;

        &:active,
        &:hover {
          background-color: #fff;
          color: white;
        }
      }
    }

    .wrapper__card {
      height: 100%;
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      //margin: 20px 0;
      position: relative;

      .card__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin-top: 15px;
        margin-left: 10px;
        margin-bottom: 10px;
        background-color: #fff;

        .header__icon {
          cursor: pointer;
          height: 100%;
          width: auto;
          // color: white;
          display: inline-flex;

          i {
            font-size: 28px;
            font-weight: 700;
            color: #fff;

            &::before,
            &::after {
              vertical-align: initial;
            }
          }

          &:hover {
            i {
              color: #fff;
            }
          }
        }
      }
    }

    &.--absolute {
      .wrapper__card {
        //height: 300px;
        .card__header {
          background-color: #fff;

          .header__icon {
            i {
              //color: white;
            }
          }
        }

        .card__drawer {
          position: relative;
          height: 100%;
          width: 100%;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
