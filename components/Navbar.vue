<template>
  <div :class="$style['navbar']">
    <nuxt-link :class="$style['nav-link']" to="/" exact>
      TestList
    </nuxt-link>
    <div :class="$style['cart-link']">
      <img :class="$style['cart-img']" @click="onCart" src="@/assets/img/svg/cart.svg" />
      <div :class="$style.counter" v-if="goodsCounter > 0">{{goodsCounter}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onCart() {
      this.$emit('onCart')
    }
  },
  computed: {
    goodsCounter() {
      return this.$store.getters['products/products'].length;
    }
  }
}
</script>

<style module lang="scss">
  .navbar {
    position: sticky;
    top: 0;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6.2%;;
    height: 4.125em;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    z-index: 3;
  }

  .nav-link {
    text-decoration: none;
    font-family: PTSansBold;
    font-size: 22px;
    color: #59606D;
  }

  .cart-link {
    position: relative;
    width: 1.5em;
    height: 1.7em;
    cursor: pointer;
  }

  .cart-img {
    width: 100%;
  }

  .counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
    color: white;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #959DAD;
    top: -0.5em;
    right: -0.5em;
  }
</style>