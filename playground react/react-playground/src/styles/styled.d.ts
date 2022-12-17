import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme{
    name: string;
    color: string;
    bgColor: string;
    text: string;
    cardBackground: string;
  }
}