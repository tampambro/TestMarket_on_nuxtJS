<template>
  <div :class="$style.wrapper">
    <div :class="$style.imgWrapper">
      <img :src="productImg" />
    </div>
    <div :class="$style.infoWrapper">
      <p :class="$style.name">{{productName}}</p>
      <p :class="$style.price">{{price | priceFormatting}} ₽</p>
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
    </div>
    <div :class="$style.deleteWrapper">
      <img src="~assets/img/svg/trash.svg" @click="removeFromCart" />
    </div>
  </div>
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
    removeFromCart() {
      this.$store.dispatch('products/removeFromCart', this.idProduct);
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
  display: flex;
  max-width: 22.75em;
  height: 7.5em;
  padding: 0.9em 1.375em 0.9em 1.5em;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.imgWrapper {
  width: 22%;
  height: 5.625em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.infoWrapper {
  margin-left: 10%;
  width: 53.6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name {
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  color: #59606D;
}

.price {
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  font-family: PTSansBold;
}

.deleteWrapper {
  position: absolute;
  display: flex;
  align-items: center;
  right: 1.375em;
  top: 50%;
  transform: translate(0, -50%);
  cursor: url("~assets/img/svg/cursor.svg"), pointer;
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
</style>