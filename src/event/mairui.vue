<template>
    <div class="eventBody">
        <div class="lessonUnit">
            <div class="innerZone">
                <h3></h3>
                <van-cell-group>
                    <!--<van-field v-model="orderid" label="销售订单号" placeholder="请输入销售订单号"/>-->
                    <!--<van-field label="服务类别" placeholder="请选择服务类别"/>-->
                    <van-field label="姓名" v-model="signInfo.name" placeholder="请输入您的姓名"/>
                    <van-field label="手机号" v-model="signInfo.phone" placeholder="请输入您的联系方式"/>
                    <van-field label="价格" v-model="signInfo.lessonPrice" readonly placeholder=""/>
                </van-cell-group>
                <van-button size="large" type="warning">报名并支付</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    // import { Tabbar, TabbarItem } from 'vant'
    import { Button } from 'vant'
    import { Field } from 'vant'
    import { Cell, CellGroup } from 'vant'
    export default {
        data() {
            return {
                active: 0,
                signInfo:{
                    eventId:'',
                    lessonName:'',
                    phone:'',
                    name:'',
                    lessonPrice:''
                }
            }
        },
        name: "event",
        components: {
            [Button.name]: Button,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Field.name]: Field
        },
        methods:{
            onLoad(){
                const z = this
                console.log(z.query)
            },
            alipayOrWeChat(){
                const z = this
                let ua = window.navigator.userAgent.toLowerCase();
                //判断是不是微信
                if ( ua.match(/MicroMessenger/i) == 'micromessenger' ) {
                    return "WeiXIN";
                }
                //判断是不是支付宝
                if (ua.match(/AlipayClient/i) == 'alipayclient') {
                    return "Alipay";
                }
                //哪个都不是
                return "false";
                z.isntWechatOrAlipay()
            },
            isntWechatOrAlipay(){
                alert('请在微信或者支付宝中扫码打开')
            },
            useAliPay(){

            }
        },
        created(){
            const z = this
            z.alipayOrWeChat()
            if (z.alipayOrWeChat() == false){

            }
            console.log('zz',z.alipayOrWeChat())
            z.signInfo.lessonPrice = z.$route.query.price
        }
    }
</script>

<style scoped>
    .eventBody{
        width: 100%;
        height: 100%;
        background-color: #e7b327;
        z-index: 9999;
        position: fixed;
        /*background-image: linear-gradient(343deg, #FFD26F 0%, #3677FF 100%)*/
        /*background-image: linear-gradient(0deg, #FFDB01 75%, #0E197D 100px)*/
    }
    .eventBg{
        width: 100%;

    }
    .lessonUnit{
        height: 100%;
        width: 100%;
        background-image: url("../../static/img/mairuiLesson.png");
        background-repeat: no-repeat;
        background-size: 100%;
        height: 800px;
    }
    .innerZone{
        padding: 15px;
        padding-top: 80%;
    }

</style>
