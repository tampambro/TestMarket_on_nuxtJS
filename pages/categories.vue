<template>
  <main :class="$style.wrapper">
    <div :class="$style.filterWrapper">
      <label :class="$style.select" :for="$style.select">
        <input :id="$style.bg" type="radio" name="list" value="not_changed"  checked />
        <input :id="$style.select" type="radio" name="list" value="not_changed" />
        <label :class="$style.bg" :for="$style.bg"></label>
        <div :class="$style.items">
          <div :class="$style.listWrapper" @click="selectFilter">
            <input :id="$style.list0" type="radio" name="list" value="price" />
            <label :for="$style.list0">По цене</label>

            <input :id="$style.list1" type="radio" name="list" value="rating" />
            <label :for="$style.list1">По популярности</label>
          </div>

          <span :id="$style.text">Сортировать по:
            <span :class="$style.filterValue__false" v-if="filterValue === ''"></span>
            <span :class="$style.filterValue__true" v-else-if="filterValue === 'price'">цене</span>
            <span :class="$style.filterValue__true" v-else-if="filterValue === 'rating'">рейтингу</span>
          </span>
        </div>
      </label>
    </div>
    <nuxt-child :filterValue="filterValue" />
  </main>
</template>

<script>

  export default {
    data() {
      return {
      filterValue: '',
    }},
    methods: {
      selectFilter(e) {
        this.filterValue = e.target.value;
      }
    },
  }
</script>

<style lang="scss" module>
  $mobileWidth: 772px;

  .wrapper {
    position: relative;
    width: 100%;
    margin-top: 6.0625em;
  }

  .filterWrapper {
    position: absolute;
    width: 100%;
    @media (max-width: $mobileWidth) {
      top: 1em;
    }
  }

  input {
    display: none;
  }

  #text {
    position: absolute;
    display: block;
    top: 0;
    background: white;
    width: 13em;
  }

  .select {
    font-size: 16px;
    width: 180px;
    height: 34px;
    line-height: 30px;
    position: relative;
    right: 5em;
    float: right;
    bottom: 2.8em;
    z-index: 2;
  }

  .select input[name="list"]:not(:checked) ~ #text {
    color: black;
    background: white;
  }

  .select input[name="list"]:checked ~ #text {
    background: transparent;
    color: transparent;
    z-index: 3;
  }

  .items {
    display: block;
    min-height: 30px;
    position: absolute;
    overflow: hidden;
    width: calc(100% + 10px);
    cursor: pointer;

  }

  .listWrapper {
    width: 10em;
    height: 4.25em;
    margin-top: 0.375em;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    background-color: white;

  }

  #select:not(:checked) ~ .items {
    height: 30px;
  }

  .items label {
    font-size: 14px;
    display: none;
    padding-left: 0.8em;
    background: transparent;
    color: #959DAD;
  }

  .items label:hover {
    background: #F8F8F8;
    color: #000;
    cursor: pointer;
  }

  #select:checked ~ .items {
    padding-top: 30px;
  }

  #select:checked ~ .items label {
    display: block;
  }

  #select:checked ~ .bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  #list0, #list1 {
    position: relative;
  }

  .filterValue__false {
    color: #59606D;
    position: relative;
  }

  .filterValue__true {
    @extend .filterValue__false;
    &::after {
      position: absolute;
      top: 40%;
      transform: translate(0, -50%);
      content: url("~assets/img/svg/sort_arrow.svg");
      margin-left: 4px;
    }
  }
</style>
