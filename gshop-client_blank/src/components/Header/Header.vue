<template>
   <header>
      <i class="iconfont icon-shouye"></i>
      <span class="slot">网易严选</span>
      <div>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
   header
    display flex
    background-color #fafafa
    height 88px
    width 100%
    line-height 88px
    position fixed
    left 0
    top 0
    z-index 10
    padding 0 24px
    div
      flex 1
      .icon-sousuo
        margin-left 50px
        margin-right 20px
      .iconfont
        font-size 46px
    .icon-shouye
      flex 1
      font-size 51px
    .slot
      font-weight 900
      font-size 40px
      flex 1
      margin-left 36px
</style>
