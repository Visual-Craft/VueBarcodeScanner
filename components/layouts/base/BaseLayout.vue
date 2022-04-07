<template>
  <div :class="isUserDealer ? 'flex-row base-layout' : 'base-layout'">
    <header />

    <main :class="['content', { 'align-center': !alignTop, 'align-top': alignTop, 'flex-direction': directionColumn }]">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Header, Navigation } from '@/components/ui';

@Component({
  components: {
    Header,
    Navigation,
  },
})
export default class BaseLayout extends Vue {
  @Prop({ type: Boolean, default: false })
  private alignTop!: boolean;

  @Prop({ type: Boolean, default: false })
  private directionColumn!: boolean;
}
</script>

<style scoped lang="scss">
.base-layout {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-color: $c-grey_lighter;
}

.content {
  display: flex;
  flex: auto;
}

.align-top {
  align-items: flex-start;
}

.flex-column {
  flex-direction: column;
}
</style>
