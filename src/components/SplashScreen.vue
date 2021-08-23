<template>
  <div class="splash-screen d-flex justify-center align-center">
    <div class="d-flex flex-column align-center text-center">
      <v-img contain src="@/assets/icon.png" width="200" height="200"></v-img>
      <div class="splash-screen__title mt-n11">Gerimis</div>
      <div class="splash-screen__desc mt-5">
        Dont worry about the weather we all here
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.splash-screen
  min-height: 100vh
  background: $bLUE
  .splash-screen__title
    font-weight: 700
    font-size: 2.125rem
    color: white
  .splash-screen__desc
    max-width: 200px
    background: $whiteGradient
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
</style>

<script>
export default {
  name: "SplashScreen",
};
</script>
