<template>
  <div id="app">
    <menus></menus>

    <main>
      <div id="body">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menus from './menu/Menus'

export default {
  
  name: '{{name}}-app',
  
  components: {
    Menus
  },

  computed: {
    ...mapGetters({
      user:"user"
    })
  },

  created() {
    let self = this;
    
    if(!self.user || !self.user.userId){
      self.$router.push({name:'login'});
      return;
    }

    self.$router.push('myhome');
  },

  mounted() {

  },

  beforeDestroy:function(){

  },

  methods:{
    
  },  
}
</script>

<style lang="scss">
#app {}

.body {
  .collection {
    margin: 0px;

    .collection-item {
      width:100%;
      text-align:left;
      color:black;
    }
  }

  .collection-ul {
      margin: 0px;

      .collection-item-li {
      width:100%;
      text-align:left;
      color:black;
    }
  }

}

.screen-center {
  width:100%;
}

.always-bottom {}

.userView {}

#loading-bar {
  display:flex;
  padding-bottom:20%;
  justify-content: center;
  align-items:center;
  width:100%;
  height:100%;
}


.loadingbar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  &.screen-center {
    position: absolute;
    width: 240px;
    height: 200px;
    top: calc(50% - 100px);
    left: calc(50% - 120px);
    background-color: white;
    border: 2px solid rgb(234, 234, 234);
    border-radius: 1em;
  }

}
</style>
