<template>
  <button-component
    class="btn-gradient"
    :is-large="isLarge"
    :is-block="isBlock"
    :is-submit="isSubmit"
    :disabled="disabled"
    :router-link="routerLink"
    v-on="$listeners"
  >
    <template #default>
      <slot />
    </template>
  </button-component>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ButtonComponent } from '@/components/ui/buttons';

@Component({
  components: { ButtonComponent },
})
export default class ButtonPrimary extends Vue {
  @Prop({ type: Boolean, default: true })
  private isLarge!: boolean;

  @Prop({ type: Boolean, default: true })
  private isBlock!: boolean;

  @Prop({ type: Boolean, default: false })
  private isSubmit!: boolean;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: Object || undefined, default: undefined })
  private routerLink!: object | undefined;
}
</script>

<style scoped lang="scss">
.btn-gradient {
  color: #000;
  background: $gradient-primary;
  &:hover {
    background: $gradient-primary-revert;
  }
}

.btn-gradient[disabled] {
  color: #fff;
  background: $c-silver-light;
  &:hover {
    background: $c-silver-light;
  }
}
</style>
