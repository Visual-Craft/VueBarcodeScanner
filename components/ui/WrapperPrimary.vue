<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <slot name="header" />
    </div>
    <div class="wrapper-white">
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class WrapperPrimary extends Vue {}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-self: normal;

  &-white {
    background: $c-white-base;
    border-radius: 10px 10px 0 0;
    display: flex;
    flex: 1 0 auto;
    align-self: normal;
    align-items: flex-start;
  }
}
</style>
