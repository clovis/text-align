<template>
  <div id="app">
    <main-header></main-header>
    <div class="container-fluid">
      <search-form></search-form>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/header"
import searchForm from "./components/searchForm"

export default {
    name: "app",
    components: {
        mainHeader,
        searchForm
    },
    data: function() {
        return {
            globalConfig: this.$globalConfig
        }
    }
}
</script>

<style>
body,
.btn {
    font-size: 0.85rem;
}

#app {
    font-family: "Open Sans", sans-serif;
}

.shadow-1 {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.btn-light {
    border-color: #ddd;
}

.corner-btn {
    position: absolute;
    transition: all .1s ease-out;
    padding: 5px;
    line-height: 1;
    top: 0;
    overflow: hidden;
    border-color: #ddd;
    border-style: solid;
}

.corner-btn.right {
    right: 0;
    border-width: 0px 0px 1px 1px;
}

.corner-btn.left {
    left: 0;
    border-width: 0px 1px 1px 0px;
}

.corner-btn.destroy:hover {
    background-color: #565656;
    color: #f8f8f8;
    cursor: pointer;
}
</style>
