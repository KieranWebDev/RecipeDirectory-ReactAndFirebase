import { useTheme } from '../../hooks/useTheme';
//styles
import './themeSelelctor.css';

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return <div>ThemeSelector</div>;
}
