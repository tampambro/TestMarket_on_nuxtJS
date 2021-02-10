<template>
  <div>
    <Cart @onCart="showCart" :isCartActive="isCartActive" />
    <Navbar @onCart="showCart" />
    <main :class="$style['container']">
      <NavCatalog :categories="categories" />
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import NavCatalog from '@/components/NavCatalog';
import Cart from '@/components/Cart';

export default {
    async fetch() {
    if (this.$store.getters['catalog/catalog'].length === 0) {
      await this.$store.dispatch('catalog/fetch');
    }
  },
  data() {
    return {
      isCartActive: false,
    }
  },
  components: {
    Navbar,
    NavCatalog,
    Cart,
  },
  computed: {
    categories() {
      return this.$store.getters['catalog/catalog'];
    }
  },
  methods: {
    showCart() {
      this.isCartActive = !this.isCartActive;
      if (this.isCartActive) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    }
  },
}
</script>

<style lang="scss" module>
  .container {
    display: flex;
    padding-left: 6.2%;
    padding-top: 0;
  }
</style>
