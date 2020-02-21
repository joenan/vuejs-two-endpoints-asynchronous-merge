<template>
  <div id="app">
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">
         <app-header></app-header>
                     
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
</template>

<script>
 

export default {
  name: "App",
  components: { }
};
</script>

<style>
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/simple-sidebar.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "./assets/css/comments.css";
</style>
