import { useState } from 'react';

import { Container } from './styles';

import { useTheme } from '../../context/theme';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container>
      <div className="tg-list-item">
        <input
          onChange={handleChangeTheme}
          className="tgl tgl-flip"
          id="cb5"
          type="checkbox"
        />
        <label className="tgl-btn" data-tg={theme.title} htmlFor="cb5" />
      </div>
    </Container>
  );
};

export default ToggleTheme;
