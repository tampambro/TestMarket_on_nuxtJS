<template>
    <div :class="$style.goods">
      <product-card v-for="product of goods" :key="product.id" :idProduct="product.id" :rating="product.rating" :productName="product.name" :price="product.price" :productImg="'https://frontend-test.idaproject.com' + product.photo"></product-card>
    </div>
</template>

<script>
import ProductCard from '../../components/ProductCard';

  export default {
    async fetch({store, params}) {
      await store.dispatch('goods/fetchGoods', params.id)
    },
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    components: {
      ProductCard
    },
    props: {
      filterValue: {
        type: String
      },
    },
    watch: {
      filterValue: function() {
        this.$store.commit('goods/sortGoods', this.filterValue)
      },
    },
    computed: {
      goods() {
        return this.$store.getters['goods/goods'];
      }
    }
  }
</script>

<style lang="scss" module>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
