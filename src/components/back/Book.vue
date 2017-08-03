<template>
  <section class="links">
    <div class="title">书单</div>
    
    <div class="panel">
      <button @click="saveLinks">保存</button>
    </div>
  </section>
</template>

<script>
  import {mapMutations, mapActions, mapState} from 'vuex'
  export default{
    created(){
      this.getLinks()
    },
    computed: mapState(['links']),
    methods: {
      ...mapActions(['saveLinks', 'getLinks']),
      ...mapMutations(['UPDATE_LINK_NAME', 'UPDATE_LINK_HREF', 'ADD_NEW_LINK', 'REMOVE_LINK'])
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";

  section.links {
    height: 100%;
    min-width: 500px;
    .title {
      @include title();
    }
    table {
      @include center();
      padding-top: 100px;
      width: 500px;
      position: relative;
      input {
        box-sizing: border-box;
        height: 30px;
        padding: 6px;
        transition: all 0.2s;
        border-left: 0 solid $green1;
      }
      input:focus {
        border-left: 6px solid $green1;
      }
      tr {
        height: 50px;
        th {
          &:first-of-type {
            width: 120px;
          }
          &:last-of-type {
            width: 60%;
          }
        }
        td {
          text-align: center;
          input {
            width: 100%;
          }
          &:first-of-type {
            input {
              max-width: 60px;
            }
            i {
              cursor: pointer;
              transition: all 0.4s;
              &:after {
                content: '';
                width: 10px;
                display: inline-block;
              }
              &:hover {
                color: $green1
              }
            }
          }
        }
      }
    }
    .panel {
      position: absolute;
      bottom: 40px;
      right: 100px;
      button {
        @include greenButton();
        height: 30px;
        width: 80px;
      }
    }
  }
</style>
