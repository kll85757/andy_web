<script src="../../../../LargeScreen/node_modules/small-medium-large-xlarge/dist/index.js"></script>
<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item slot-scope="" icon="home-o" @click="toPage('home')">首页</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" dot @click="toPage('home')">配件交易</van-tabbar-item>
            <van-tabbar-item icon="todo-list-o" @click="toPage('home')">报单</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5" @click="toPage('home')">论坛</van-tabbar-item>
            <!--<van-tabbar-item icon="setting-o">我的</van-tabbar-item>-->
        </van-tabbar>
    </div>
</template>
<script>
    import { Tabbar, TabbarItem } from 'vant';
    import { Tab, Tabs } from 'vant';
    export default {
        data() {
            return {
                active: 2
            }
        },
        name: "BottomMenu",
        components: {
            [Tabbar.name]: Tabbar,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [TabbarItem.name]: TabbarItem
        },
        methods: {
            toPage(){
                const z = this
                console.log()
            }
        }
    }
</script>
<style scoped>

</style>
