import axios  from  "@/axios.js"
let api = {
    sousuo (){
      return  axios.get("/api/meituan/header/search.json")
    },
    remen(){
      
        return  axios.get("/api/meituan/header/searchHotWords.json")
    },
    youG(){
      return axios.get("/api/meituan/index/resultsByKeywords.json")
    },
    sheng(){
      return axios.get("/api/meituan/city/province.json")
    },
    remenC(){
      return axios.get("/api/meituan/city/hot.json")
    },
    zuijin(){
      return axios.get("/api/meituan/city/recents.json")
    },
    pinyin () {
      return axios.get("/api/meituan/city/cityList.json")
    },
    fenler(){
      return axios.get("/api/meituan/list/classify.json")
    },
    quyu(){
      return axios.get("/api/meituan/list/areaList.json")
    },
    reS(){
      return axios.get("/api/meituan/list/goodsList.json")
    },
    tuijian(){
      return axios.get("/api/meituan/list/recommend.json")
    },
    denglu(params){
      return axios.get("/api/meituan/login",{
          params,
      })
    },
    zhuce(params){
      return axios.get("/api/meituan/register",{
        params
      })
    }
}
export default api