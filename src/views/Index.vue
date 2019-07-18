<template>
    <div class="orderInfo">
        <TopMenu />
        <SearchBar class="SearchBar" />
        <SwipeBar />

        <component v-bind:is="currentTabComponent"></component>

        <BottomMenu />
    </div>
</template>

<script>
    import SearchBar from '../components/SearchBar.vue'
    import SwipeBar from '../components/SwipeBar.vue'
    import TopMenu from '../components/TopMenu.vue'
    import BottomMenu from '../components/BottomMenu.vue'
    import { Button } from 'vant';
    import { Field } from 'vant';
    import { Cell, CellGroup } from 'vant';
    //嘴咬玫瑰 脚踩哈雷 一路向西，cv中村悠一
    export default {
        data() {
            return {
                img: 'url(' + '../../src/assets/topBg.png' + ')',
                orderid:'',
                username:'',
                phone:''
            }
        },
        name: "Index",
        components: {
            SearchBar,
            TopMenu,
            BottomMenu,
            SwipeBar,
            [Button.name]: Button,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field
        },
        methods:{
            switchPage(){
                this.$router.push({
                    name: 'BBS'
                })
            }
        }
    }
</script>

<style scoped>
    html,body{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(327deg, #5EFCE8 0%, #736EFE 100%)
        /*background-image: linear-gradient(343deg, #FFD26F 0%, #3677FF 100%)*/
        /*background-image: linear-gradient(0deg, #FFDB01 75%, #0E197D 100px)*/
    }




</style>
