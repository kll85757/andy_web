<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" dot>市场</van-tabbar-item>
            <van-tabbar-item icon="todo-list-o" info="5">工单</van-tabbar-item>
            <van-tabbar-item icon="friends-o">社区</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vant';
    export default {
        data() {
            return {
                active: 0
            }
        },
        name: "BottomMenu",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        }
    }
</script>

<style scoped>

</style>
