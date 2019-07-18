<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <!--<TopMenu />-->
    <!--<SearchBar class="SearchBar" />-->
    <!--<SwipeBar />-->
    <!--<OrderCreate />-->
    <TableView />
    <!--<Index />-->
  </div>
</template>

<script>
// import SearchBar from './components/SearchBar.vue'
// import SwipeBar from './components/SwipeBar.vue'
// import TopMenu from './components/TopMenu.vue'
// import BottomMenu from './components/BottomMenu.vue'
// import OrderCreate from './views/OrderCreate.vue'
// import Index from './views/Index.vue'
import TableView from './views/TableView.vue'


export default {
  name: 'App',
  components: {
      // SearchBar,
      // TopMenu,
      // BottomMenu,
      // OrderCreate,
      // SwipeBar,
      // Index
      TableView
  }
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#deefff+0,98bede+100;Blue+3D+%2310 */
      background: rgb(222,239,255); /* Old browsers */
      /*background: -moz-linear-gradient(top,  rgba(222,239,255,1) 0%, rgba(152,190,222,1) 100%); !* FF3.6-15 *!*/
      /*background: -webkit-linear-gradient(top,  rgba(222,239,255,1) 0%,rgba(152,190,222,1) 100%); !* Chrome10-25,Safari5.1-6 *!*/
      /*background: linear-gradient(to bottom,  rgba(222,239,255,1) 0%,rgba(152,190,222,1) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/
      /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#deefff', endColorstr='#98bede',GradientType=0 ); !* IE6-9 *!*/

  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*padding-top: 8px;*/
  }
  .SearchBar{
    width: 100%;
  }
</style>
