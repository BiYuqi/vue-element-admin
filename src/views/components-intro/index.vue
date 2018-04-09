<template>
  <div class="intro">
    {{ leftTxt }}
    <a :href="url" target="_blank">
      {{ urlTxt }}
    </a>
    {{ rigthTxt }}
  </div>
</template>

<script>
export default {
  props: {
    leftTxt: {
      type: String
    },
    url: {
      type: String
    },
    urlTxt: {
      type: String
    },
    rigthTxt: {
      type: String
    }
  }
}
</script>

<style lang="css">
</style>
