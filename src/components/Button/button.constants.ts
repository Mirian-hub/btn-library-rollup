import { ButtonCSSClasses } from './enums/button-css-class.enum';
import { ButtonWidthCSSClasses } from './enums/button-width-css-class.enum';

export const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondary-outline',
  TERTIARY: 'tertiary',
  ROUNDED: 'rounded'
} as const;
export type ButtonType = typeof ButtonTypes[keyof typeof ButtonTypes];

export const ButtonWidths = {
  FIXED: 'fixed',
  FLUID: 'fluid',
  INTRINSIC: 'intrinsic'
} as const;
export type ButtonWidth = typeof ButtonWidths[keyof typeof ButtonWidths];

export const ButtonColors = {
  DEFAULT: 'default',
  DANGER: 'danger'
};

export type ButtonColor = typeof ButtonColors[keyof typeof ButtonColors];

export interface ButtonClasses {
  buttonClasses: Map<ButtonType, ButtonCSSClasses>;
  buttonWidthClasses: Map<ButtonWidth, ButtonWidthCSSClasses>;
}

const buttonClasses: Map<ButtonType, ButtonCSSClasses> = new Map<ButtonType, ButtonCSSClasses>();

const buttonWidthClasses: Map<ButtonWidth, ButtonWidthCSSClasses> = new Map<
  ButtonWidth,
  ButtonWidthCSSClasses
>();

buttonClasses.set(ButtonTypes.PRIMARY, ButtonCSSClasses.PRIMARY);
buttonClasses.set(ButtonTypes.SECONDARY, ButtonCSSClasses.SECONDARY);
buttonClasses.set(ButtonTypes.SECONDARY_OUTLINE, ButtonCSSClasses.SECONDARY_OUTLINE);
buttonClasses.set(ButtonTypes.TERTIARY, ButtonCSSClasses.TERTIARY);
buttonClasses.set(ButtonTypes.ROUNDED, ButtonCSSClasses.ROUNDED);

buttonWidthClasses.set(ButtonWidths.FIXED, ButtonWidthCSSClasses.BUTTON_FIXED);
buttonWidthClasses.set(ButtonWidths.FLUID, ButtonWidthCSSClasses.BUTTON_FLUID);
buttonWidthClasses.set(ButtonWidths.INTRINSIC, ButtonWidthCSSClasses.BUTTON_CONTAIN);

export const ButtonClassesFactory = () => ({
  buttonClasses,
  buttonWidthClasses
});
