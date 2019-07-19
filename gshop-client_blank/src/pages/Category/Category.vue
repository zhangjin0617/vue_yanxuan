<!-- 分类 -->

<template>
<div id="category">
    <!--category的头-->
    <section class="categoryHeader" >
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
    </section>
    <div class="containerWrap">
      <!--左侧导航-->
      <section class="nav">
        <ul>
          <li>推荐专区</li>
          <li>夏凉专区</li>
          <li>爆品专区</li>
          <li>新品专区</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
      </section>
      <!--右侧-->
      <section class="container">
        <div>
          <img src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196">
          <ul>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
            <li >
              <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
              <span>员工精选好货</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>

export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#category
    // 头部
    .categoryHeader
      height 88px
      line-height 72px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      position fixed
      top 0
      left 0
      z-index 30
      background-color #fff
      border-bottom 1px solid #eee
      .input
        height 56px
        line-height 56px
        width 675px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 200px
        top 30px
    .containerWrap
      padding-top 88px
      display flex
      //左侧导航
      .nav
        height 1140px
        ul
          width 162px
          li
            height 50px
            text-align center
            color #7e8c8d
            margin-top 40px
            font-size 28px
            &:first-child
              margin-top 0
          .active
            border-left 6px solid #b4282d
            color #b4282d
      //右侧内容
      .container
        width 588px
        height 1140px
        padding 0px 30px 100px 30px
        img
          width 528px
          height 192px
        ul
          display flex
          flex-wrap wrap
          margin-top 20px
          li
            width 144px
            height 216px
            margin-right 32px
            display flex
            flex-direction column
            img
              height 144px
              width 144px
            span
              font-size 28px
              text-align center

</style>
