<template>
    <!--<div class="tableView" v-for="(slideRow, index) in slideRowMenu" :key="index">-->
    <div class="tableView">
        <div class="tableZone" v-for="item,index in formatData">
            <van-row>
                <van-col class="titleFis" span="24">{{item.page}}</van-col>
            </van-row>

            <van-row class="titleSec">
                <van-col span="6">窗宽：{{item.Hdata.A11}}</van-col>
                <van-col span="6">窗宽：{{item.Hdata.A10}}</van-col>
                <van-col span="6">倍率：{{item.Hdata.A12}}</van-col>
                <van-col span="6">门幅：{{item.Hdata.A24}}</van-col>
            </van-row>

            <van-row>
                <van-col span="4">名称</van-col>
                <van-col span="4">型号</van-col>
                <van-col span="4">用量</van-col>
                <van-col span="4">单价</van-col>
                <van-col span="4">合计</van-col>
                <van-col span="4">备注</van-col>
            </van-row>

            <van-row>
                <van-col span="4">布</van-col>
                <van-col span="4">{{item.Hdata.A40}}</van-col>
                <van-col span="4">{{item.Hdata.A13}}</van-col>
                <van-col span="4">{{item.Hdata.A14}}</van-col>
                <van-col span="4">{{item.Hdata.A15}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">纱</van-col>
                <van-col span="4">{{item.data.B11}}</van-col>
                <van-col span="4">{{item.Hdata.A13}}</van-col>
                <van-col span="4">{{item.Hdata.A16}}</van-col>
                <van-col span="4">{{item.Hdata.A17}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">罗马圈</van-col>
                <van-col span="4">{{item.data.C20}}</van-col>
                <van-col span="4">{{item.Hdata.A13*6}}</van-col>
                <van-col span="4">{{item.data.C10}}</van-col>
                <van-col span="4">{{item.data.C11}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">罗马杆(布)</van-col>
                <van-col span="4">{{item.data.C21}}</van-col>
                <van-col span="4">{{item.Hdata.A11}}</van-col>
                <van-col span="4">{{item.data.C12}}</van-col>
                <van-col span="4">{{item.data.C13}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">布带(布)</van-col>
                <van-col span="4">{{item.data.C22}}</van-col>
                <van-col span="4">{{item.data.C13}}</van-col>
                <van-col span="4">{{item.data.C14}}</van-col>
                <van-col span="4">{{item.data.C15}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">配布</van-col>
                <van-col span="4">{{item.data.B13}}</van-col>
                <van-col span="4">{{item.data.B10}}</van-col>
                <van-col span="4">{{item.data.B11}}</van-col>
                <van-col span="4">{{item.data.B12}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">拼接布</van-col>
                <van-col span="4">{{item.data.D13}}</van-col>
                <van-col span="4">{{item.data.D10}}</van-col>
                <van-col span="4">{{item.data.D11}}</van-col>
                <van-col span="4">{{item.data.D12}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">帘头布料</van-col>
                <van-col span="4">{{item.data.E10}}</van-col>
                <van-col span="4">{{item.data.E11}}</van-col>
                <van-col span="4">{{item.data.E12}}</van-col>
                <van-col span="4">{{item.data.E13}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">帘头轨道</van-col>
                <van-col span="4">{{item.data.E30}}</van-col>
                <van-col span="4">{{item.data.E14}}</van-col>
                <van-col span="4">{{item.data.E15}}</van-col>
                <van-col span="4">{{item.data.E16}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">帘头花边</van-col>
                <van-col span="4">{{item.data.E17}}</van-col>
                <van-col span="4">{{item.data.E18}}</van-col>
                <van-col span="4">{{item.data.E19}}</van-col>
                <van-col span="4">{{item.data.E20}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">帘头魔术贴</van-col>
                <van-col span="4">{{item.data.E21}}</van-col>
                <van-col span="4">{{item.data.E22}}</van-col>
                <van-col span="4">{{item.data.E23}}</van-col>
                <van-col span="4">{{item.data.E24}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">帘头衬布</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">帘头加工</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.E25}}</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.E26}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">安装费</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.E27}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">钩子</van-col>
                <van-col span="4">{{item.data.F20}}</van-col>
                <van-col span="4">{{item.Hdata.A13*6}}</van-col>
                <van-col span="4">{{item.data.F10}}</van-col>
                <van-col span="4">{{item.data.F11}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">轨道</van-col>
                <van-col span="4">{{item.data.F21}}</van-col>
                <van-col span="4">{{item.Hdata.A11}}</van-col>
                <van-col span="4">{{item.data.F12}}</van-col>
                <van-col span="4">{{item.data.F13}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">布带</van-col>
                <van-col span="4">{{item.data.F22}}</van-col>
                <van-col span="4">{{item.Hdata.A13}}</van-col>
                <van-col span="4">{{item.data.F14}}</van-col>
                <van-col span="4">{{item.data.F15}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">花边水晶</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.Hdata.A13}}</van-col>
                <van-col span="4">{{item.data.H30}}</van-col>
                <van-col span="4">{{item.data.H31}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">挂球</van-col>
                <van-col span="4">{{item.data.H10}}</van-col>
                <van-col span="4">{{item.data.H11}}</van-col>
                <van-col span="4">{{item.data.H12}}</van-col>
                <van-col span="4">{{item.data.H13}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">绑带</van-col>
                <van-col span="4">{{item.data.H20}}</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.H21}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">墙钩</van-col>
                <van-col span="4">{{item.data.H22}}</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.H23}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">布料包边</van-col>
                <van-col span="4">{{item.data.H24}}</van-col>
                <van-col span="4">{{item.data.A13}}</van-col>
                <van-col span="4">{{item.data.H25}}</van-col>
                <van-col span="4">{{item.data.H26}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">纱铅线</van-col>
                <van-col span="4">{{item.data.H27}}</van-col>
                <van-col span="4">{{item.data.A13}}</van-col>
                <van-col span="4">{{item.data.H28}}</van-col>
                <van-col span="4">{{item.data.H29}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">飘窗垫</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.K10}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">沙发垫</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.K11}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">抱枕</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.K12}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">窗旗</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.K13}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">桌旗</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.K14}}</van-col>
                <van-col span="4"></van-col>
            </van-row>
            <van-row>
                <van-col span="4">其他费用</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">-</van-col>
                <van-col span="4">{{item.data.L10}}</van-col>
                <van-col span="4"></van-col>
            </van-row>

            <van-row>
                <van-col span="4">合计</van-col>
                <van-col span="16" style="background: #fff;z-index: 9;">{{item.Fdata.Z10}}</van-col>
                <van-col span="4"></van-col>
            </van-row>



            <br/>
            <br/>
        </div>


    <div class="bottomMenu">
        <van-button type="primary" size="large" @click="tablePrint()" style="background:rgba(18, 103, 180, 0.5);border-color: #1784e6">导出</van-button>
        <!--<van-button type="info">打印</van-button>-->
    </div>

    </div>
</template>

<script>
    let actions = require('../server/actions');
    let test = require('../server/tableTest');
    import html2pdf from 'html2pdf.js';
    import { Row, Col } from 'vant';
    import { Button } from 'vant';

    // import { Field } from 'vant';
    // import { Cell, CellGroup } from 'vant';
    // import { testData } from '../server/tableTest.json';


    export default {
        data() {
            return {
                img: 'url(' + '../../src/assets/topBg.png' + ')',
                orderid:'',
                username:'',
                tableData:{},
                cellNum:0,
                formatData:[],
                configs:[],
                phone:''
            }
        },
        name: "tableView",
        components: {
            [Row.name]: Row,
            [Col.name]: Col,
            [Button.name]: Button,
            // [Cell.name]: Cell,
            // [CellGroup.name]: CellGroup,
            // [Field.name]: Field
        },
        methods: {
            // ...mapActions([
            //     'getTableData'
            // ]),
            getTable(){
                const z = this
            },
            tablePrint() {
                // html2pdf(document.getElementsByClassName('tableZone'))
                // let shareContent = document.body,//需要截图的包裹的（原生的）DOM 对象
                //     width = shareContent.clientWidth, //获取dom 宽度
                //     height = shareContent.clientHeight, //获取dom 高度
                //     canvas = document.createElement("canvas"), //创建一个canvas节点
                //     scale = 2; //定义任意放大倍数 支持小数
                //     canvas.width = width * scale; //定义canvas 宽度 * 缩放
                //     canvas.height = height * scale; //定义canvas高度 *缩放
                //     canvas.style.width = shareContent.clientWidth * scale + "px";
                //     canvas.style.height = shareContent.clientHeight * scale + "px";
                //     canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
                //     let opts = {
                //         scale: scale, // 添加的scale 参数
                //         canvas: canvas, //自定义 canvas
                //         logging: false, //日志开关，便于查看html2canvas的内部执行流程
                //         width: width, //dom 原始宽度
                //         height: height,
                //         useCORS: true, // 【重要】开启跨域配置
                //     };
                // html2Canvas(shareContent, opts).then(() => {
                //     var contentWidth = canvas.width;
                //     var contentHeight = canvas.height;
                //     //一页pdf显示html页面生成的canvas高度;
                //     var pageHeight = (contentWidth / 592.28) * 841.89;
                //     //未生成pdf的html页面高度
                //     var leftHeight = contentHeight;
                //     //页面偏移
                //     var position = 0;
                //     //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                //     var imgWidth = 595.28;
                //     var imgHeight = (592.28 / contentWidth) * contentHeight;
                //     var pageData = canvas.toDataURL("image/jpeg", 1.0);
                //     var PDF = new JsPDF("", "pt", "a4");
                //     if (leftHeight < pageHeight) {
                //         PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
                //     } else {
                //         while (leftHeight > 0) {
                //             PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
                //             leftHeight -= pageHeight;
                //             position -= 841.89;
                //             if (leftHeight > 0) {
                //                 PDF.addPage();
                //             }
                //         }
                //     }
                //     PDF.save(name + ".pdf"); // 导出的文件名
                // });
            },

        },
        created() {
            const z = this
            z.getTable()
            z.tableData = test
            // let vals = test.src.sections.configs
            for(let i = 0;i < test.src.length;i++) {
                // console.log('zza',test.src[i])
                z.formatData.push({'page':test.src[i].alias})

                z.formatData[i]['data'] = {};
                for(let x = 0;x < test.src[i].sections.length;x++){
                    // console.log(x,test.src[i].sections[x])
                    // console.log('ii',z.formatData[i])
                    // z.formatData[i]['data'] = test.src[i].sections[x].configs;
                    for(let g = 0;g < test.src[i].sections[x].configs.length;g++){
                        if(z.formatData[i]['data'].hasOwnProperty(`${test.src[i].sections[x].configs[g].id}`)){
                            z.formatData[i]['data'][`${test.src[i].sections[x].configs[g].id}`+'v'+(g)] = test.src[i].sections[x].configs[g].value
                        }else {
                            z.formatData[i]['data'][`${test.src[i].sections[x].configs[g].id}`] = test.src[i].sections[x].configs[g].value
                        }

                    }

                    // console.log('ii',test.src[i].alias)

                    // z.formatData[i]['page'] = test.src[i].alias;


                    z.configs = z.configs.concat(test.src[i].sections[x].configs);
                    // console.log('ss',z.configs)
                }
                // z.formatData[i]['Hdata'] = test.src[i].headerSection.configs;
                z.formatData[i]['Hdata'] = {};
                z.formatData[i]['Fdata'] = {};
                for(let s = 0;s < test.src[i].headerSection.configs.length;s++){
                    z.formatData[i]['Hdata'][`${test.src[i].headerSection.configs[s].id}`] = test.src[i].headerSection.configs[s].value
                }
                for(let f = 0;f < test.src[i].footerSection.configs.length;f++){
                    z.formatData[i]['Fdata'][`${test.src[i].footerSection.configs[f].id}`] = test.src[i].footerSection.configs[f].value
                }


            }
            console.log('组织过后的数据',z.formatData)

            // for(let i = 0;i < test.src.sections.length;i++){
            //     console.log('vals',vals[i])
            // }
            // console.log('zz',z.configs)
        }
    }
</script>

<style scoped>
    .tableView{
        border: 2px solid #0c4678;
    }
    .tableZone > .van-row{
        border-bottom: 1px solid #0c4678;
    }
    .van-row > .van-col{
        /*border-right: 1px solid #0c4678;*/
        padding: 5px;
        height: 100%;
        position: relative;
    }
    .van-row > .van-col:before{
        width: 1px;
        content: '';
        background: #0c4678;
        top: 0;
        position: absolute;
        height: 3.5rem;
        right: 0;
        z-index: 1;
    }
    .van-row > .van-col:first-child{
        font-weight: bold;
        font-size: 14px;
    }
    .van-row > .van-col:last-child:before{
        width: 1px;
        content: '';
        background: transparent;
    }
    .titleSec > .van-col{
        font-weight: bold;
        font-size: 14px;
        border-right: 0;
        padding: 5px;
    }
    .titleSec > .van-col:before{
        content: '';
        background: transparent;
    }
    .van-row > .van-col:last-child{
        border-right: 0;
    }
    .topBg{
        width: 100%;
        height: 170px;
    }
    .orderInfo{
        overflow: scroll;
        padding: 15px;
    }
    .bottomMenu{
        position: fixed;
        bottom: 10px;
        width: calc(100% - 20px);
        padding-left: 10px;
        padding-right: 10px;
    }
    .titleFis{
        font-weight: bold;
        font-size: 18px;
    }


</style>
