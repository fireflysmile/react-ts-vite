import icons from 'assets/data/icons.json'
import Icon from './styled'

const FontIcon: FunctionComponent<{
  name: string;
  className?: string;
  size?: number;
  cursor?: boolean;
  color?: keyof DefaultTheme['colors'];
  onClick?: (event?: ReactMouseEvent<HTMLSpanElement>) => void;
}> = ({ className, size, name, cursor, color, onClick }) => {
  const fontContent = () => get(icons, [name], '');

  return (
    <Icon
      className={`font-icon ${className}`}
      size={size}
      content={fontContent()}
      $cursorPointer={cursor}
      color={color}
      onClick={onClick}
    />
  );
};

FontIcon.defaultProps = {
  className: '',
  size: 24,
  cursor: false,
  color: 'black',
  onClick: () => null,
};

export default FontIcon;
