<template>
    <div class="orderInfo">
        <!--<SearchBar />-->
        <!--<img class="topBg" :src="img" />-->
        <h3>活动页面</h3>

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
        name: "BBS",
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
