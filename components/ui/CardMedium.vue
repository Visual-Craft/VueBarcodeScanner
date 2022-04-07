<template>
  <div :class="['card card-medium', { transparent: transparent }]">
    <header :class="['card-header', { 'pb-0': headerPaddingUnset }]">
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
import { Prop } from 'vue-property-decorator';

@Component({})
export default class CardMedium extends Vue {
  @Prop({ type: Boolean, default: false })
  private headerPaddingUnset!: boolean;

  @Prop({ type: Boolean, default: false })
  private transparent!: boolean;
}
</script>

<style scoped lang="scss">
.card {
  &-medium {
    padding: 50px 80px;
    max-width: 420px;
    background: $c-white-base;
    margin: 0 auto;
    border-radius: 10px;
  }

  &-header {
    text-align: center;
    padding-bottom: 32px;
  }

  &-body {
  }

  &-footer {
  }
}
</style>
