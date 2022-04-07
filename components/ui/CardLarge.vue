<template>
  <div class="card card-large">
    <header class="card-header">
      <slot name="header" />
    </header>
    <div class="card-body">
      <slot name="body" />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CardLarge extends Vue {}
</script>

<style scoped lang="scss">
.card {
  &-large {
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    max-width: 824px;
    min-height: 500px;
    background: white;
    margin: 0 auto 24px;
    border-radius: 10px;
  }

  &-header {
    text-align: center;
  }

  &-body {
    display: flex;
    flex: 1 0 auto;
  }

  &-footer {
  }
}
</style>
