<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <router-link to="/" class="link logo">
          <img class="m-auto" src="@images/scanner.png" alt="Scanner" />
        </router-link>
      </v-list-item-content>
    </v-list-item>
    <hr class="dotted" />
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t(`messages.${item.title}`) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseHeader extends Vue {
  private items = [
    { title: 'dashboard', icon: 'mdi-view-dashboard' },
    { title: 'scanner', icon: 'mdi-magnify' },
  ];
}
</script>

<style scoped lang="scss">
.v-navigation-drawer {
  background: #fff !important;
}
.m-auto {
  margin: auto;
}
.dropdown-user {
  align-items: center;
  padding: 50px 10px 20px;
}
hr.dotted {
  border: 0;
  border-top: 5px dotted #e8e8ea;
  width: 50%;
  margin: auto;
}

.v-list-item__title {
  font-weight: 700 !important;
  font-size: 14px !important;
  color: #1d1929;
}
</style>
