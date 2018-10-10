<template>
  <div class="page-container">
    <headerbar/>
    <main class="main">
      <nuxt/>
    </main>
    <foot/>
  </div>
</template>

<script>
import headerbar from '~/components/headerbar/default';
import foot from '~/components/foot/default';

export default {
  components: {
    headerbar,
    foot
  }
};
</script>

<style lang="less">
  @import '~@adidas/yarn-design-system/src/less/variables/main';

  .main {
    @media screen and (max-width: @screen-xs-max) {
      margin-bottom: 10rem;
    }
  }
</style>
