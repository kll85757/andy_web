<template>

    <div id="SwipeBar">
        <!--<van-swipe :autoplay="6000" :height="200">-->
            <!--<van-swipe-item v-for="(image, index) in images" :key="index">-->
                <!--<img :src="image" />-->
            <!--</van-swipe-item>-->
        <!--</van-swipe>-->
        <van-swipe :autoplay="6000" :height="200">
            <van-swipe-item>
                <img src='../../static/img/banner_1.png' />
            </van-swipe-item>
            <van-swipe-item>
                <img src='../../static/img/banner_2.png' />
            </van-swipe-item>
            <van-swipe-item>
                <img src='../../static/img/banner_3.png' />
            </van-swipe-item>
        </van-swipe>
        <img  />
    </div>


</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    import { Swipe, SwipeItem } from 'vant';
    Vue.use(Lazyload)

    export default {
    data() {
        return {
            images: [
                // require('../../src/assets/logo.png'),
            ],
        }
    },
    name: 'SwipeBar',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    props: {
        msg: String
    },
    methods:{

    }
}
</script>

<style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    #SwipeBar{
        padding: 15px;
        height: auto;
    }
    #SwipeBar >>> img{
        width: 100%;
        border-radius: 5px;
    }
</style>
