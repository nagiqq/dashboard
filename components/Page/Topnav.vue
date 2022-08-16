<template>
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom">
      <div class="iq-sidebar-logo">
        <div class="top-logo">
          <a href="index.html" class="logo">
            <div class="iq-light-logo">
<!--              <img src="images/logo.gif" class="img-fluid" alt="">-->
            </div>
            <div class="iq-dark-logo">
<!--              <img src="images/logo-dark.gif" class="img-fluid" alt="">-->
            </div>
            <span>vito</span>
          </a>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="navbar-left">
          <ul id="topbar-data-icon" class="d-flex p-0 topbar-menu-icon">
            <li class="nav-item">
              <a href="index.html" class="nav-link font-weight-bold search-box-toggle"><i class="ri-home-4-line"></i></a>
            </li>
            <li><a href="chat.html" class="nav-link"><i class="ri-message-line"></i></a></li>
            <li><a href="e-commerce-product-list.html" class="nav-link"><i class="ri-file-list-line"></i></a></li>
            <li><a href="profile.html" class="nav-link"><i class="ri-question-answer-line"></i></a></li>
            <li><a href="todo.html" class="nav-link router-link-exact-active router-link-active"><i class="ri-chat-check-line"></i></a></li>
          </ul>
          <div class="iq-search-bar d-none d-md-block">
            <form action="#" class="searchbox">
              <input type="text" class="text search-input" placeholder="Type here to search...">
              <a class="search-link" href="#"><i class="ri-search-line"></i></a>
              <div class="searchbox-datalink">
                <h6 class="pl-3 pt-3 pb-3">Pages</h6>
                <ul class="m-0 pl-3 pr-3 pb-3">
                  <li class="iq-bg-primary-hover rounded"><a href="index.html" class="nav-link router-link-exact-active router-link-active pr-2"><i class="ri-home-4-line pr-2"></i>Dashboard</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="dashboard-1.html" class="nav-link router-link-exact-active router-link-active pr-2"><i class="ri-home-3-line pr-2"></i>Dashboard-1</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="chat.html" class="nav-link"><i class="ri-message-line pr-2"></i>Chat</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="calendar.html" class="nav-link"><i class="ri-calendar-2-line pr-2"></i>Calendar</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="profile.html" class="nav-link"><i class="ri-profile-line pr-2"></i>Profile</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="todo.html" class="nav-link"><i class="ri-chat-check-line pr-2"></i>Todo</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="app/index.html" class="nav-link"><i class="ri-mail-line pr-2"></i>Email</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="e-commerce-product-list.html" class="nav-link"><i class="ri-message-line pr-2"></i>Product Listing</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="e-commerce-product-detail.html" class="nav-link"><i class="ri-file-list-line pr-2"></i>Product Details</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="pages-faq.html" class="nav-link"><i class="ri-compasses-line pr-2"></i>Faq</a></li>
                  <li class="iq-bg-primary-hover rounded"><a href="form-wizard.html" class="nav-link"><i class="ri-clockwise-line pr-2"></i>Form-wizard</a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>

          <ul class="navbar-nav  ml-auto navbar-list">
              <li>
                <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                  <img src="assets/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user">
                  <div class="caption">
                    <h6 class="mb-0 line-height text-white">Chris</h6>
                    <span class="font-size-12 text-white">執行長</span>
                  </div>
                </a>
              </li>
          </ul>

      </nav>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnav',
}
</script>

<style scoped></style>
