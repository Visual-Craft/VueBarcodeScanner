<template>
  <header class="header">
    <v-container>
      <div class="content">
        <div class="header-nav">
          <router-link to="/" class="link logo">
            <img src="@images/scanner.png" alt="Scanner" />
          </router-link>
          <router-link to="/" class="btn-link">
            <v-icon left>mdi-view-grid-outline</v-icon>
            Dashboard
          </router-link>
          <router-link :to="{ name: 'Scanner' }" class="btn-link active">
            <v-icon left>mdi-steering</v-icon>
            Test Drives
          </router-link>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseHeader extends Vue {}
</script>

<style scoped lang="scss">
.header {
  margin: 10px;
  background-color: $c-white-base;
  border-radius: 10px;

  .logo {
    img {
      max-height: 26px;
    }
  }

  .container {
    padding: 18px 30px;
    @media (max-width: 1263px) {
      max-width: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .header-nav {
    display: flex;
    align-items: center;
  }
}
</style>
