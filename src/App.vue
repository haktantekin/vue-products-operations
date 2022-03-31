<template>
<div>
<app-header></app-header>
<app-container></app-container>
<app-footer></app-footer>
</div>
  
</template>
<script>
import Header from "./assets/components/shared/Header"
import Footer from "./assets/components/shared/Footer"
// import ProductPurchase from "./assets/components/products/ProductPurchase"
//  import ProductSell from "./assets/components/products/ProductSell"
import ProductList from "./assets/components/products/ProductList"

export default{
  components:{
    appHeader: Header,
    appFooter: Footer,
    appContainer: ProductList 
  }
}
</script>
<style>

</style>