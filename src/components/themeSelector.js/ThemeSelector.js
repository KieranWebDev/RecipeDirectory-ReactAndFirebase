import { useTheme } from '../../hooks/useTheme';
//styles
import './themeSelector.css';
//button icon
import modeIcon from '../../assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233', 'black'];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  function toggleMode() {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  }
  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="light/dark-mode-toggle"
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%' }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
