<template>
  <base-layout>
    <template #default>
      <scanner v-if="screen === SCANNER_SCREEN" @setScreen="setScreen($event)" />
    </template>
  </base-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseLayout from '@/components/layouts/base/BaseLayout.vue';

import Scanner from '../screens/Scanner.vue';
import {
  SCANNER_SCREEN,
} from '../constants';

@Component({
  components: {
    BaseLayout,
    Scanner,
  },
})
export default class TestDrive extends Vue {
  private screen = SCANNER_SCREEN;
  private SCANNER_SCREEN = SCANNER_SCREEN;
  private prevScreen = '';

  private setScreen(data: { name: string }): void {
    this.prevScreen = this.screen;
    this.screen = data.name;
  }
}
</script>
