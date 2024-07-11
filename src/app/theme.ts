import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  // these are defined in my WIP canva file - https://www.canva.com/design/DAGKcUFkSl0/atfY8W3ZrpLLUv-jUITcbA/view?mode=prototype
  // in prod, i'd likely have transparency versions for all colours e.g. CYAN_MID_80
  colors: {
    CYAN_MEDIUM: '#15636F',
    // I changed the hex from #1D8FA0 due to the WAVE Accessibility tool flaggig low text contrast
    CYAN_MEDIUM_80: '#1D8FA080',
    CYAN_MID: '#1B7E8D',
    BLUE_MID: '#86A3BF90',
    BLUE_LIGHT: '#C9E7FB',
    TEXT: '#1B2D25',
    YELLOW: '#FFD21F',
    WHITE: "#FFFFFF",
    DARK_GREEN: "#2C535A"
  },
};

export default theme;
