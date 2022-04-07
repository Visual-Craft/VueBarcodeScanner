<template>
  <v-btn
    :color="color"
    :disabled="disabled"
    :large="isLarge"
    :block="isBlock"
    :type="isSubmit ? 'submit' : 'button'"
    :to="routerLink"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {
  @Prop({ type: Boolean, default: true })
  private isLarge!: boolean;

  @Prop({ type: Boolean, default: true })
  private isBlock!: boolean;

  @Prop({ type: Boolean, default: false })
  private isSubmit!: boolean;

  @Prop({ type: Boolean, default: false })
  private disabled!: boolean;

  @Prop({ type: String, default: 'primary' })
  private color!: string;

  @Prop({ type: Object || undefined, default: undefined })
  private routerLink!: object | undefined;
}
</script>
