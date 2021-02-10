<template>
  <div :class="$style.wrapper">
    <div :class="$style.imgWrapper">
      <img src="~assets/img/png/ok.png" alt="ok" />
    </div>
    <h1 :class="$style.header">Заявка успешно отправлена</h1>
    <p :class="$style.text">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<style lang="scss" module>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .imgWrapper {
    width: 5em;
    height: 5em;
    img {
      width: 100%;
    }
  }

  .header {
    margin: 0;
    font-size: 24px;
  }

  .text {
    margin: 0;
  }

</style>