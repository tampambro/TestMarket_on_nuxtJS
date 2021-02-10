<template>
  <div :class="$style.wrapper">
    <div :class="isCartActive ? $style.bg_active : $style.bg" @click="onCart" />

    <div :class="isCartActive ? $style.cart_active : $style.cart">
      <h1 :class="$style.header">
        Корзина
        <img @click="onCart" src="~assets/img/svg/cross.svg" />
      </h1>

      <div v-if="!isValid">
        <p :class="$style.text" v-if="inCart.length === 0">Пока что вы ничего не добавили в корзину.</p>
        <div :class="$style.order" v-else>
          <h2 :class="$style.h2">Товары в корзине</h2>
          <buy-card v-for="product of inCart" :key="product.id" :idProduct="product.id" :rating="product.rating" :productName="product.name" :price="product.price" :productImg="'https://frontend-test.idaproject.com' + product.photo"></buy-card>

          <form>
            <h2 :class="$style.h2">Оформить заказ</h2>
            <fieldset>
              <input :class="$style.inputField" type="text" placeholder="Ваше имя" v-model="userName" />
              <input :class="$style.inputField" type="text" placeholder="Телефон" v-mask="{mask: '+7 999 999-99-99', greedy: true}" v-model="phone" />
              <input :class="$style.inputField" type="text" placeholder="Адрес" v-model="address" />
            </fieldset>
          </form>
        </div>

        <div :class="$style.btn" @click="onCart" v-if="inCart.length === 0">Перейти к выбору</div>
        <div :class="$style.btn" @click="validate" v-else>Отправить</div>

        <p :class="$style.warning" v-if="isTouch && isValid === false">Все поля обязательные.<br />
        После удачной отправки формы содержимое корзины очищается</p>
      </div>

      <successful-order v-else></successful-order>
    </div>
  </div>
</template>

<script>
import BuyCard from './BuyCard.vue';
import SuccessfulOrder from './SuccessfulOrder.vue';

export default {
  data() {
    return {
      userName: '',
      phone: '',
      address: '',
      isTouch: false,
      isValid: ''
    }
  },
  components: { BuyCard, SuccessfulOrder },
  props: {
    isCartActive: {
      type: Boolean,
      require: true,
    },

  },
  methods: {
    onCart() {
      this.$emit('onCart')
      this.isValid = '';
    },
    validate() {
      if (this.userName && this.phone.length === 16 && this.address) {
        this.isValid = true;
        this.$store.commit('products/setProducts', []);
      } else {
        this.isValid = false;
        this.isTouch = true;
      }
    },
  },
  computed: {
    inCart() {
      return this.$store.getters['products/products'];
    }
  },
  mounted() {
    if (localStorage['cart']) {
      this.$store.commit('products/setProducts', JSON.parse(localStorage['cart']));
    }
    console.log(JSON.parse(localStorage.getItem('cart')))
  },
}
</script>

<style lang="scss" module>
  .wrapper {
    position: absolute;
  }

  .bg {
    position: fixed;
    background: #FFFFFF;
    opacity: 0.8;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: none;
  }

  .bg_active {
    @extend .bg;
    display: block;
    overflow-y: auto;
  }

  .cart {
    z-index: 5;
    width: 28.75em;
    height: 100%;
    position: fixed;
    right: -28.75em;
    background: white;
    padding: 3.25em 3em 0;
    transition: all 0.3s;
    overflow-y: auto;
    @media (max-width: 570px) {
      width: 100%;
      right: -100%;
    }
  }

  .cart_active {
    @extend .cart;
    right: 0;
  }

  .header {
    font-size: 32px;
    line-height: 41px;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      cursor: url("~assets/img/svg/cursor.svg"), pointer;
    }
  }

  .text {
    font-size: 22px;
    line-height: 28px;
    margin: 1.1em 0;
  }

  .btn {
    width: 100%;
    height: 3.125em;
    color: white;
    background: #1F1F1F;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: url("~assets/img/svg/cursor.svg"), pointer;
    transition: all 0.3s;
    margin-bottom: 1em;
    &:hover {
      background: #59606D;
    }
  }

  .order {
    margin: 1.5em 0;
    form {
      margin-top: 2em;
      fieldset {
        border: none;
        padding: 0;
      }
    }
  }

  .h2 {
    margin: 0 0 0.9em 0;
    font-size: 18px;
    line-height: 23px;
    color: #59606D;;
    font-weight: normal;
  }

  .inputField {
    margin-bottom: 1em;
    display: block;
    width: 100%;
    height: 3.125em;
    background: #F8F8F8;
    border-radius: 8px;
    border: none;
    padding: 0 0.875em;
    &::placeholder {
      color: #959DAD;
    }
  }

  .warning {
    display: flex;
    font-size: 16px;
    line-height: 21px;
    &::before {
      content: url("~assets/img/svg/warning.svg");
      display: block;
      margin-right: 0.5em;
    }
  }

</style>