interface DarkTheme {
  title: string;
  colors: {
    white: string;
    background: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
    red: string;
    redDark: string;
    green: string;
    blue: string;
    blueDark: string;
    blueTwitter: string;
    after: string;
    before: string;
    backBox: string;
  };
}

export default {
  title: 'dark',

  colors: {
    white: '#f1f1f1',
    background: '#202020',
    grayLine: '#dcdde0',
    text: '#fff',
    textHighlight: '#b3b9ff',
    title: '#fff',
    red: '#e83f5b',
    redDark: '#e52948',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0',
    after: '#ff3a19',
    before: '#01b163',
    backBox: '#343539',
  },
} as DarkTheme;
