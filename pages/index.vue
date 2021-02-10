<template>
  <div :class="$style.wrapper">
  </div>
</template>

<script>

  export default {
    mounted: function() {
      if (this.$route.path === '/') {
        this.$router.push('/categories/1');
      }
    },
  }
</script>

<style lang="scss" module>
  .wrapper {
    width: 100%;
    margin-top: calc(6.0625em - 1em);
  }

  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
