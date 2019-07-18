<template>
    <div class="orderInfo">
        <!--<SearchBar />-->
        <!--<img class="topBg" :src="img" />-->
        <h3>工单信息</h3>
        <van-cell-group>
            <van-field v-model="orderid" label="销售订单号" placeholder="请输入销售订单号"/>
            <van-field label="服务类别" placeholder="请选择服务类别"/>
            <van-field label="状态" placeholder="请选择状态"/>
            <van-field label="期望完成时间" placeholder="选择时间"/>
            <van-field label="报价" placeholder="请输入报价"/>
            <van-field label="需求描述" placeholder="请输入需求描述"/>
            <van-field label="受理来源" placeholder="选择来源"/>
        </van-cell-group>
        <van-button size="large" type="default">下一步</van-button>

    </div>
</template>

<script>
    import { Button } from 'vant';
    import { Field } from 'vant';
    import { Cell, CellGroup } from 'vant';

    export default {
        data() {
            return {
                img: 'url(' + '../../src/assets/topBg.png' + ')',
                orderid:'',
                username:'',
                phone:''
            }
        },
        name: "OrderCreate",
        components: {
            [Button.name]: Button,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field
        }
    }
</script>

<style scoped>

    .topBg{
        width: 100%;
        height: 170px;
    }
    .orderInfo{
        overflow: scroll;
        padding: 15px;
    }


</style>
