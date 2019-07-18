<template>

    <div id="SearchBar">
        <form action="/">
            <van-search background=""
                    v-model="key"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
            />
        </form>
    </div>


</template>

<script>
    import { Search } from 'vant';
export default {
    data() {
        return {
            key:''
        }
    },
    name: 'SearchBar',
    components: {
        [Search.name]: Search
    },
    props: {
        msg: String
    },
    methods:{
        onSearch(){
            return
        },
        onCancel(){
            return
        },
        created(){
            console.log(21)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
#SearchBar{
    position: fixed;
    top: 10px;
    width: 100%;
}
#SearchBar >>> .van-cell {
    height: 3rem;
    min-width: 1em;
    font-size: 16px;
    line-height: 2.8rem;
}
#SearchBar >>> .van-icon {
    line-height: 2.8rem;
}
</style>
