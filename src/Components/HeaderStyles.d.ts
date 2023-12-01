// HeaderStyles.d.ts
import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule;

export { css, keyframes, ThemeProvider };
export default styled;

export interface IWrapperProps {
  // Add any props specific to your Wrapper component
}

export const Wrapper: styledComponents.ThemedStyledFunction<
  React.FC<IWrapperProps>,
  any
>;
export const Container: styledComponents.ThemedStyledFunction<
  'div', // You can specify the HTML element type here
  any // Add any additional props if needed
>;