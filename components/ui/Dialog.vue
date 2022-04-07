<template>
  <v-row justify="center">
    <v-dialog v-model="isShow" :persistent="isPersistent" :max-width="maxWidth" :retain-focus="false">
      <v-card :class="[{ 'pop-up-large': isLarge }]">
        <v-card-title class="text-h5">
          <slot name="title" />
        </v-card-title>
        <v-card-text>
          <slot />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  @Prop({ type: Boolean, default: false })
  private isShow!: string;

  @Prop({ type: Number, default: 300 })
  private maxWidth!: string;

  @Prop({ type: Boolean, default: false })
  private isPersistent!: boolean;

  @Prop({ type: Boolean, default: false })
  private isLarge!: boolean;
}
</script>
<style scoped lang="scss">
.spacer {
  display: none;
}

.close {
  margin-left: auto;
}

.v-card__title {
  text-align: center;
}

.pop-up-large {
  .v-card__text {
    padding: 0 50px 35px !important;
  }

  .v-card__actions {
    padding: 0 50px 40px !important;
  }
}
</style>
