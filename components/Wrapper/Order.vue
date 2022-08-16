<template>
  <div class="col-lg-8">
    <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
      <div class="iq-card-header d-flex justify-content-between">
        <div class="iq-header-title">
          <h4 class="card-title">本周最新訂單</h4>
        </div>
        <div class="iq-card-header-toolbar d-flex align-items-center">
        </div>
      </div>
      <div class="iq-card-body">
        <div class="table-responsive">
          <table class="table mb-0 table-borderless">
            <thead>
            <tr>
              <th scope="col">買家</th>
              <th scope="col">訂單成立時間</th>
              <th scope="col">訂單編號</th>
              <th scope="col" class="text-right">訂單金額</th>
              <th scope="col" class="text-center">狀態</th>
              <th scope="col">管理</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Ira Membrit</td>
              <td>18/10/2019</td>
              <td>20156</td>
              <td class="text-right">$1500.00</td>
              <td class="text-center">
                <div class="badge badge-pill iq-bg-success">Paid</div>
              </td>
              <td>
                <i class="ri-ball-pen-fill text-success pr-1"></i>
                <i class="ri-delete-bin-5-line text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>Pete Sariya</td>
              <td>26/10/2019</td>
              <td>7859</td>
              <td class="text-right">$2000.00</td>
              <td class="text-center">
                <div class="badge badge-pill iq-bg-success">Paid</div>
              </td>
              <td>
                <i class="ri-ball-pen-fill text-success pr-1"></i>
                <i class="ri-delete-bin-5-line text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>Cliff Hanger</td>
              <td>18/11/2019</td>
              <td>6396</td>
              <td class="text-right">$2500.00</td>
              <td class="text-center">
                <div class="badge badge-pill iq-bg-danger">
                  Past Due
                </div>
              </td>
              <td>
                <i class="ri-ball-pen-fill text-success pr-1"></i>
                <i class="ri-delete-bin-5-line text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>Terry Aki</td>
              <td>14/12/2019</td>
              <td>7854</td>
              <td class="text-right">$5000.00</td>
              <td class="text-center">
                <div class="badge badge-pill iq-bg-success">Paid</div>
              </td>
              <td>
                <i class="ri-ball-pen-fill text-success pr-1"></i>
                <i class="ri-delete-bin-5-line text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>Anna Mull</td>
              <td>24/12/2019</td>
              <td>568569</td>
              <td class="text-right">$10000.00</td>
              <td class="text-center">
                <div class="badge badge-pill iq-bg-success">Paid</div>
              </td>
              <td>
                <i class="ri-ball-pen-fill text-success pr-1"></i>
                <i class="ri-delete-bin-5-line text-danger"></i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order"
};
</script>

<style scoped>

</style>
