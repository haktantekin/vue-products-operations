import Vue from "vue";
import { router } from "../../router"

const state = {
    products : []
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){
        return key => state.products.filter(element =>{
            return element.key == key;
        }); 
    }
}

const mutations ={
    updateProductList(state, product){
        state.products.push(product);

    }
}

const actions = {
    initApp({ commit }){
        // Vue Resource İşlemleri
        Vue.http.get("https://urun-islemleri-prod-1b952-default-rtdb.firebaseio.com/products.json")
        .then(response=>{
            let data = response.body;
            for(let key in data){
                data[key].key = key;
                commit("updateProductList", data[key]);
            }
        })
    },
    saveProduct({ dispatch, commit }, product){
        // Vue Resource İşlemleri

        Vue.http.post("https://urun-islemleri-prod-1b952-default-rtdb.firebaseio.com/products.json", product)
        .then((response)=>{
            /***  Ürün Listesinin Güncellenmesi  ***/
            product.key = response.body.name;
            commit("updateProductList", product);
            /***  Alış, Satış, Bakiye Güncellemesi  ***/
            let tradeResult = {
                purchase: product.price,
                sale: 0,
                count: product.count
            }

            dispatch("setTradeResult", tradeResult);

            router.replace("/")

        })

    },
    sellProduct({ commit }, payload){
        // Vue Resource İşlemleri
        

    }
}

export default{
    state,
    getters,
    mutations,
    actions
}