<template>
  <div class="policies__container">
    <!-- Privacy Policy Start -->
    <h1>{{ $t('policies.privacyPolicy.title') }}</h1>
    <span v-html="$t('policies.privacyPolicy.textTemplate')" />

    <!-- The cookies and web beacons Start -->
    <h1 class="pt-5">{{ $t('policies.cookies.title') }}</h1>
    <span v-html="$t('policies.cookies.textTemplate')" />

    <!-- third-party sites Start -->
    <h1 class="pt-5">{{ $t('policies.thirdPartySites.title') }}</h1>
    <span v-html="$t('policies.thirdPartySites.textTemplate')" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  head() {
    return {
      titleTemplate: '%s - ' + this.$t('theFooter.privacyPolicy'),
    };
  },
});
</script>

<style lang="postcss">
.policies__container {
  @apply 2xl:px-52 xl:px-12 lg:px-28 md:px-16 sm:px-10 my-12 px-5 text-dark-surface;
}

.policies__container h1 {
  @apply font-bold text-3xl my-5;
}

.policies__container-text--highlight {
  @apply text-secondary-lightgreen font-medium cursor-pointer transition-colors;
}

.policies__container-text--highlight:hover {
  @apply text-secondary-green transition-colors;
}
</style>
