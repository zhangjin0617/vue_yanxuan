
<!-- 首页 -->
<template>
    <div id="home">
     <!-- home的头部 -->
      <section class="homeHeader">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" @click="goTo('/home')" alt="">
        <span class="icon-search"></span>
        <span class="input" @click="goTo('/searchShop')">搜索商品,共~~~~~款好物</span>
        <button @click="goTo('/person')">登录</button>
      </section>
      <!--home的头部导航-->
    <div>
      <!--home的头部导航原版-->
      <!-- <section class="homeNav">
        <ul class="homeNavUl">
          <li class="navItem">推荐</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">服饰鞋包</li>
          <li class="navItem">美食酒水</li>
        </ul>
        <div class="opcityBox"></div>
        <div class="arrow">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png">
        </div>
      </section>  -->
    <div class="person-wrap homeNav" ref="personWrap">
      <ul class="person-list homeNavUl" ref="personTab">
        <li class="person-item navItem">推荐</li>
        <li class="person-item navItem">居家生活</li>
        <li class="person-item navItem">服饰鞋包</li>
        <li class="person-item navItem">美食酒水</li>
        <li class="person-item navItem">个护清洁</li>
        <li class="person-item navItem">母婴亲子</li>
        <li class="person-item navItem">运动旅行</li>
        <li class="person-item navItem">数码家电</li>
        <li class="person-item navItem">全球特色</li>
      </ul>
      <div class="arrow" @click="showList">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png">
      </div>
    </div>
      <!-- home头部导航的展开-->
      <section class="all" v-if="show">
        <div class="allTitle">全部频道</div>
        <ul class="allUl">
          <li class="allItem">1</li>
          <li class="allItem">2</li>
          <li class="allItem">3</li>
        </ul>
      </section>
      <!--home头部导航展开时的遮罩层-->
      <section class="wrap"></section>
    </div>
       <!--轮播-->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
     <!--自营退货退款-->
    <section class="introduce">
      <div>网易自营品牌</div>
      <div class="center">30天无忧退货</div>
      <div>48小时快速退款</div>
    </section>
        <!--带图片的分类列表-->
    <section class="categoryList">
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png">
          <span>新品首发</span>
        </li>
      </ul>
    </section>
    <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
    <!--四个图-->
    <section class="hasFourList">
      <ul>
        <li>
          <p class="big">9.9超值一口价</p>
          <p class="small">花点小钱，过得更舒服</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
          </div>
        </li>
         <li>
          <p class="big">9.9超值一口价</p>
          <p class="small">花点小钱，过得更舒服</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
          </div>
        </li>
         <li>
          <p class="big">9.9超值一口价</p>
          <p class="small">花点小钱，过得更舒服</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
          </div>
        </li>
         <li>
          <p class="big">9.9超值一口价</p>
          <p class="small">花点小钱，过得更舒服</p>
          <div>
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
            <img src="https://yanxuan.nosdn.127.net/d57f7ed82ebb2b55bbd66e52b5996577.png?imageView&thumbnail=150x150&quality=75">
          </div>
        </li>
      </ul>
    </section>
    <!--私人定制轮播-->
    <section class="personalTailor">
      <h3>私人定制</h3>
      <div class="swiper-container personalSwiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
          </li>
          <li class="swiper-slide">
            <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
          </li>
          <li class="swiper-slide">
            <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
             <div>
              <img src="https://yanxuan.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&quality=65&thumbnail=330x330">
              <span>洗衣吸色布<i>￥9.9</i></span>
            </div>
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <!--限时购-->
    <section class="sixListWrap">
      <div id="split"></div>
      <h3>
        <span class="left">限时购</span>
        <span class="right">更多 ></span>
      </h3>
     <div class="ListWrap">
        <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
         <li>
          <img src="https://yanxuan.nosdn.127.net/9bca6dd6dc93ee3682da894708ead0d6.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div>
          <span class="now">¥79</span>
          <del class="current">¥110</del>
        </div>
        </li>
      </ul>
     </div>

    </section>
    <!--新品首发-->
    <section class="sixListWrap newSixListWrap">
      <div id="split"></div>
      <h3>
        <span class="left">新品首发</span>
        <span class="right">更多 ></span>
      </h3>
      <ul>
        <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
         <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
         <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
         <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
         <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
         <li >
          <img src="https://yanxuan.nosdn.127.net/88b874292d468684115d9a25f1d7f235.png?imageView&quality=65&thumbnail=330x330">
          <div>
            <span class="title">全价成猫粮 1.8千克</span>
            <span class="price">￥99</span>
          </div>
        </li>
      </ul>
    </section>


   </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
export default {
  data() {
    return {
      show=false
    }
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
 mounted() {
    //轮播
      var mySwiper = new Swiper ('.firstSwiper', {
        loop: true, // 循环模式选项
        //autoplay : { // 自动轮播
          //delay:3000
        //},
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function(swiper, current, total) {
            var customPaginationHtml = "";
            for(var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if(i == (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
      })
      var mySwiperPersonal = new Swiper ('.personalSwiper', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
},
methods: {
  goTo(path){
    this.$router.replace(path)
  },
  personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 12 * 124;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  showList(){
    this.show=!show
  }
}


</script>
<style lang="stylus" rel="stylesheet/stylus">
   @import "../../common/stylus/mixins.styl"
  #home
    padding-bottom 105px
    .homeHeader
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
      img
        height 40px
      .input
        height 56px
        line-height 56px
        width 486px
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
        left 230px
        top 30px
      button
        width 78px
        height 44px
        border 1px solid $main
        color $main
        background-color #fff
        font-size 24px
    .homeNav
      overflow hidden
      position relative
      margin-top 88px
      .homeNavUl
        font-size 28px
        color #333
        clearFix()
        li
          width 112px
          height 66px
          margin 0 19px
          line-height 66px
          float left
          text-align center
          &.active
            border-bottom 6px solid $main
            color $main
      .opcityBox
        width 60px
        height 60px
        z-index 15
        position absolute
        top 0
        right 100px
        background linear-gradient(90deg,rgba(255,255,255,0) 0,#fff 100%)
      .arrow
        width 100px
        height 60px
        text-align center
        padding-top 15px
        background-color #fff
        z-index 15
        position absolute
        top 0
        right 0
        transition all 1s
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
    .all
      background-color #fff
      height 372px
      width 100%
      color #333
      top-border-1px(#eee)
      position absolute
      top 72px
      left 0
      z-index 10
      .allTitle
        width 100%
        height 60px
        line-height 60px
        font-size  28px
        padding-left 30px
      .allUl
        padding 24px 0 0 0
        li
          width 150px
          height 56px
          line-height 56px
          text-align center
          border 1px solid #ccc
          border-radius 4px
          float left
          font 24px
          margin 0 0 40px 30px
          background-color #fafafa
          &.active
            color $main
            border-color $main
    .wrap
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      z-index 5
      margin auto
      background-color rgba(0,0,0,.5)
    // 轮播
    .firstSwiper
      width 100%
      height 370px
      /*自定义分页器的样式，这个你自己想要什么样子自己写*/
      .swiper-pagination-customs {
        width: 30px;
        height: 4px;
        display: inline-block;
        background: #000;
        opacity: .3;
        margin: 0 5px;
      }
      /*自定义分页器激活时的样式表现*/
      .swiper-pagination-customs-active {
        opacity: 1;
        background-color: #fff;
      }
      img
        width 100%
        height 100%
    //自营退货退款
    .introduce
      width 100%
      height 72px
      line-height 72px
      display flex
      justify-content center
      color $main
      div
        text-align center
      .center
        margin 0 40px
    .categoryList
      margin-bottom 40px
      ul
        width 100%
        height 332px
        li
          width 150px
          float left
          display flex
          flex-direction column
          text-align center
          padding 15px 20px 0 20px
          box-sizing border-box
          img
            height 110px
            width 110px
            display block
    //四个图
    .hasFourList
      margin-top 40px
      ul
        display flex
        flex-wrap wrap
        justify-content center
        li
          width 343px
          height 260px
          padding 20px 0 0 20px
          margin 4px 0 0 4px
          background-color #f5f5f5
        .big
          font-size 32px
          color #333
          padding-left 10px
        .small
          font-size 24px
          color #7f7f7f
          margin 10px 0
          padding-left 10px
        div
          img
            float left
            width 150px
            height 150px
    .personalTailor
      overflow hidden
      margin-bottom 30px
      h3
        height 100px
        line-height 100px
        font-size 32px
        padding-left 30px
      .swiper-container
        height 380px
        ul
          width 3000px
          height 311px
          display flex
        li
          width 750px
          display flex
          div
            display flex
            flex-direction column
            margin-left 20px
            span
              width 210px
              i
                color $main
            img
              background-color #f5f5f5
              height 216px
              width 216px
              margin-bottom 12px
    .sixListWrap
      .ListWrap
        margin-bottom 20px
        ul
          display flex
          flex-wrap wrap
          padding-left 25px
          li
            width 216px
            height 318px
            margin-right 25px
            text-align center
            div
              height 100px
              line-height 100px
              .now
                color #b4282d
                font-size 28px
                margin-right 20px
              .current
                color #7f7f7f
            img
              background-color #f5f5f5
              width 216px
              height 216px

      h3
        height 100px
        line-height 100px
        margin-top 20px
        .left
          font-size 32px
          margin-left 50px
        .right
          font-size 28px
          float right
          margin-right 50px
    .newSixListWrap
      padding-bottom 10px
      ul
        display flex
        flex-wrap wrap
        padding-left 25px
        li
          width 216px
          height 318px
          margin-right 25px
          div
            .title
              color #7f7f7f
              line-height 36px
            .price
              color $main
          img
            background-color #f5f5f5
            width 216px
            height 216px


</style>
