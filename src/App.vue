<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/*滚动条里面的小方块，能向上向下移动*/
::-webkit-scrollbar-thumb {
  background: #aba9a9;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb:hover {
  background: #666565;
}

::-webkit-scrollbar-thumb:active {
  background: #666565;
}

/*边角，即两个滚动条的交汇处*/
::-webkit-scrollbar-corner {
  background-color: #ffffff;
}
</style>
