<template>
  <wrapper-primary>
    <template #body>
      <card-base transparent>
        <template #body>
          <h4>{{ $t('titles.scanner') }}</h4>
          <div class="scan-section">
            <div v-if="isScanned" class="successfully-scanned">
              <circle-status size="xl" type="type-primary" />
            </div>
            <video id="video" class="video-player" muted autoplay playsinline />
            <dialog-popup :is-show="showScanError" is-persistent>
              <template #title>
                <div class="error-content">
                  <h5 class="sub-headline">{{ $t('titles.unable_read_code') }}</h5>
                </div>
              </template>
              <template>
                <div class="error-content">
                  <span class="font-main">{{ $t('messages.complete_manual_form') }}</span>
                </div>
              </template>
              <template #actions>
                <div class="btn-pop-up">
                  <button-primary :is-large="false" @click.native="showSannerForm">
                    {{ $t('buttons.ok') }}
                  </button-primary>
                </div>
              </template>
            </dialog-popup>
            <dialog-popup :is-show="showForm" :max-width="500" :is-persistent="true">
              <template #title>
                <h5 class="heading">{{ $t('titles.enter_data') }}</h5>
              </template>
              <template>
                <div class="input-container">
                  <v-text-field
                    v-model="barCode"
                    :label="`${$t('labels.bar_code')}:`"
                    :error-messages="barCodeErrors"
                    outlined
                  />
                </div>
              </template>
              <template #actions>
                <div class="btn-pop-up-large">
                  <v-btn @click="cancelForm" block large>{{ $t('buttons.cancel') }}</v-btn>
                  <button-primary :is-large="true" :is-block="true" @click.native="saveBarCode">
                    {{ $t('buttons.save') }}
                  </button-primary>
                </div>
              </template>
            </dialog-popup>
          </div>
        </template>
        <template #footer>
          <div class="btn-container">
            <v-btn @click.native="back">
              {{ $t('buttons.back') }}
            </v-btn>
            <button-primary :disabled="!isScanned" :is-large="false" :is-block="false" @click.native="nextStep">
              {{ $t('buttons.next') }}
            </button-primary>
          </div>
        </template>
      </card-base>
    </template>
  </wrapper-primary>
</template>

<script lang="ts">
import { WrapperPrimary, CardBase, DialogPopup, CircleStatus } from '@/components/ui';
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { required } from 'vuelidate/lib/validators';
import { ButtonPrimary, ButtonComponent } from '@/components/ui/buttons';
import { BrowserMultiFormatReader, BarcodeFormat } from '@zxing/browser';
import DecodeHintType from '@zxing/library/cjs/core/DecodeHintType';

const TestDriveModule = namespace('testDrive');

@Component({
  components: {
    ButtonPrimary,
    ButtonComponent,
    CardBase,
    WrapperPrimary,
    DialogPopup,
    CircleStatus,
  },
  validations: {
    vinNumber: { required },
  },
})
export default class VinScanner extends Vue {
  private showScanError = false;
  private isScanned = false;
  private controls;
  private timer;
  private showForm = false;
  private barCode = '';

  @TestDriveModule.Mutation('setBarCode')
  private setBarCode!: (code: string) => void;

  private async mounted() {
    await this.scan();
  }

  private destroyed() {
    this.controls.stop();
  }

  private get barCodeErrors() {
    const errors: Array<string> = [];

    if (!this.$v.barCode.$dirty) {
      return errors;
    }

    if (!this.$v.barCode.required) {
      errors.push(this.$t('messages.bar_code_required'));
    }

    return errors;
  }

  private async nextStep() {
    this.controls.stop();
    this.setBarCode(this.barCode);
    this.$emit('setScreen', { name: 'SomeComponent' });
  }

  private async scan() {
    const video = document.querySelector('video');
    const scanSection = document.querySelector<HTMLElement>('.scan-section');

    if (scanSection && video) {
      const hints = new Map();
      const formats = [BarcodeFormat.CODE_39];

      hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

      const codeReader = new BrowserMultiFormatReader(hints);

      await codeReader.decodeFromVideoDevice(undefined, 'video', (result, e, controls) => {
        this.controls = controls;

        if (!this.timer) {
          this.timer = setTimeout(() => {
            this.showScanError = true;
            this.controls.stop();
          }, 20000);
        }

        if (typeof result !== 'undefined') {
          this.barCode = result.getText();
          this.isScanned = true;
          this.controls.stop();
          clearTimeout(this.timer);
        }
      });
    }
  }

  private saveBarCode() {
    this.$v.$touch();

    if (!this.$v.$invalid) {
      this.showForm = false;
      this.setBarCode(this.barCode);
      this.$emit('setScreen', { name: 'SomeComponent' });
    }
  }

  private back() {
    this.controls.stop();
    this.$emit('setScreen', { name: 'SomeComponent' });
  }

  private showVinForm() {
    this.showForm = true;
    this.showScanError = false;
  }

  private async cancelForm() {
    this.barCode = '';
    this.showForm = false;
    await this.scan();
  }
}
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  justify-content: space-between;
  .v-btn {
    min-width: 135px;
  }
}

.scan-section {
  position: relative;
  height: 320px;
  width: 100%;
  background-color: $c-indigo_light;
  margin-bottom: 26px;
  border-radius: 10px;
  overflow: hidden;
}

.successfully-scanned {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-pop-up {
  width: 150px;
  margin: 0 auto;
  &-large {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 22px;
  }
}

.error-content {
  .sub-headline {
    color: $c-red;
    margin-bottom: 10px;
    text-align: center;
  }
  text-align: center;
  width: 100%;
}

.heading {
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
}

.video-player {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.input-container {
  margin-bottom: -20px;
}
</style>
