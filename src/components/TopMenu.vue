<template>
    <div class="topMenu">
        <SearchBar />
        <!--<img class="topBg" :src="img" />-->
        <!--<van-button type="default">默认按钮</van-button>-->
        <!--<van-button type="primary">主要按钮</van-button>-->
        <!--<van-button type="warning">警告按钮</van-button>-->
        <!--<van-button type="danger">危险按钮</van-button>-->
    </div>
</template>

<script>
    import SearchBar from './SearchBar.vue'
    // import { Button } from 'vant';
    export default {
        data() {
            return {
                img: 'url(' + '../../src/assets/topBg.png' + ')'
            }
        },
        name: "TopMenu",
        components: {
            SearchBar,
            // [Button.name]: Button
        }
    }
</script>

<style scoped>

    .topBg{
        width: 100%;
        height: 65px;
    }
    .topMenu{
        /*background-image: url('../assets/topBg.png');*/
        height: 65px;
        background-size: 100%;
    }

</style>
