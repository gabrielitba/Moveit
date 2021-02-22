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
    green: string;
    blue: string;
    blueDark: string;
    blueTwitter: string;
  };
}

export default {
  title: 'dark',

  colors: {
    white: '#fff',
    background: '#f2f3f5',
    grayLine: '#dcdde0',
    text: '#666666',
    textHighlight: '#b3b9ff',
    title: '#2e384d',
    red: '#e83f5b',
    green: '#4cd62b',
    blue: '#5965e0',
    blueDark: '#4953b8',
    blueTwitter: '#2aa9e0',
  },
} as DarkTheme;
