import Vue from "vue";

const state = {
    products : []
}

const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){

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