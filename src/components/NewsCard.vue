<template>
  <v-card
    color="white"
    max-height="231"
    min-height="231"
    class="mb-5 news-card"
    flat
  >
    <div>
      <v-img :src="img"></v-img>
    </div>

    <v-card-title class="py-2">
      {{ title }}
    </v-card-title>

    <div class="news-card__footer d-flex justify-space-between px-5">
      <div class="news-card__time">14 minutes ago</div>
      <div class="news-card__author">Reza Media</div>
    </div>
  </v-card>
</template>

<style lang="sass" scoped>
.v-card__title
  font-size: 1rem
  font-weight: 600
  word-break: break-word

.news-card__time, .news-card__author
  font-size: 0.75rem

.news-card__time
  color: $secondary
</style>

<script>
export default {
  name: "NewsCard",
  props: {
    img: String,
    title: String,
    subtitle: String,
  },
};
</script>
