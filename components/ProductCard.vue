<template>
  <figure :class="isAdded ? $style.productCard_active : $style.productCard" >

    <div :class="$style.ratingAndCart">
      <div :class="$style.ratingWrapper">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 33 33">
          <defs>
            <linearGradient :id="'grad' + idProduct" x1="0%" y1=0% x2="0%" y2="100%">
              <stop :offset="100 - gradientCalculation(rating) + '%'" stop-opacity="0" />
              <stop :offset="100 - gradientCalculation(rating) + '%'" stop-color="#F2C94C" stop-opacity="1" />
            </linearGradient>
          </defs>
          <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118l11.547-1.2L16.026,0.6L20.388,10.918z" :fill="'url(#grad' + idProduct + ')'" stroke-width="2" stroke="#F2C94C"/>
        </svg>
        <p :class="$style.rating">
          {{rating}}
        </p>
      </div>
      <img :class="isAdded ? $style.inCart : $style.cart" @click="addToCart" src="@/assets/img/svg/cart.svg" />
    </div>

    <img :class="$style.producImg" :src="productImg" />

    <figcaption :class="$style.info">
      <p :class="$style.productName">{{productName}}</p>
      <p :class="$style.price">{{price | priceFormatting}} ₽</p>
    </figcaption>

  </figure>
</template>

<script>
import priceFormatting from '../static/functions/priceFormatting.js';
import gradientCalculation from '../static/functions/gradientCalculation.js';

export default {
  props: {
    idProduct: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    productImg: {
      type: String,
      default: require('../assets/img/png/no_img.png'),
    },
    productName: {
      type: String,
    },
    price: {
      type: Number,
    }
  },
  filters: {
    priceFormatting,
  },
  methods: {
    gradientCalculation,
    addToCart() {
      const product = this.$store.getters['goods/goods'].find((p) => this.idProduct === p.id);
      this.$store.dispatch('products/addToCart', product);
    }
  },
  computed: {
    isAdded() {
      return this.$store.getters['products/products'].find((p) => p.id === this.idProduct);
    }
  }
}
</script>

<style lang="scss" module>
  .productCard {
    position: relative;
    width: 16.5em;
    height: 17em;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 1em;
    transition: all 0.5s;
    animation: appearance 1s linear 0s 1;
  }

  @keyframes appearance {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .productCard_active {
    @extend .productCard;
    box-shadow: 0px 4px 16px rgba(17, 224, 52, 0.5);
  }

  .ratingAndCart {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1em 1.125em 0;
    img:hover {
      cursor: url("~assets/img/svg/cursor.svg"), pointer;
    }
  }

  .ratingWrapper {
    display: flex;
  }

  .rating {
    font-family: PTSansBold;
    font-size: 10px;
    color: #F2C94C;
    margin: 0 0 0 0.4em;
  }

  .cart {
    width: 1em;
    height: 1em;
    filter: invert(.5) sepia(1) saturate(0);
    &:hover {
      filter: invert(0) sepia(1) saturate(0);
    }
  }

  .inCart {
    @extend .cart;
    filter: invert(0) sepia(1) saturate(0);
  }

  .producImg {
    display: block;
    margin: auto;
    padding-top: 1.125em;
    width: 9.9em;
    height: 12.25em;
    object-fit: cover;
  }

  .info {
    margin: 1em auto 1em 1em;
  }

  .productName {
    font-size: 14px;
    line-height: 18px;
    margin-top: 0;
    margin-bottom: 0.42em;
    color: #59606D;
  }

  .price {
    font-family: PTSansBold;
    margin: 0;
  }
</style>