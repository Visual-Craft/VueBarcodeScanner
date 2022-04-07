/**
  Example usage:

  ts:
  import { ButtonComponent } from './ui/buttons';

  template:
  <button-component
    [:is-large="isLarge"]
    [:is-block="isBlock"]
    [:is-submit="isSubmit"]>
    Button Text
  </button-component>
*/
import ButtonComponent from './ButtonComponent.vue';

/**
  Example usage:

  ts:
  import { ButtonPrimary } from './ui/buttons';

  template:
  <button-primary
    [:is-large="isLarge"]
    [:is-block="isBlock"]
    [:is-submit="isSubmit"]>
    Button Text
  </button-primary>
 */
import ButtonPrimary from './ButtonPrimary.vue';

export { ButtonComponent, ButtonPrimary };
