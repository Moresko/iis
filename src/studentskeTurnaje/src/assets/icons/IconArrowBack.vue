<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="currentColor"
    @click="$router.back()"
    class="IconBack"
  >
    <path
    d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"
    />
  </svg>
</template>

<script>
import router from '../../router';
</script>

<style>
.IconBack{
    cursor: pointer;
}
</style>