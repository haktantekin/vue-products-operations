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
    saveProduct({ commit }, payload){
        // Vue Resource İşlemleri

        Vue.http.post("https://urun-islemleri-prod-1b952-default-rtdb.firebaseio.com/products.json", payload)
        .then((response)=>{
            console.log(response);
        } )

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