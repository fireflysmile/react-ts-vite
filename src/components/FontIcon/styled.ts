interface fontIconProps {
  className: string;
  size: number;
  content: string;
  color: keyof DefaultTheme['colors'];
  $cursorPointer?: boolean;
  onClick: () => null
}

export default styled.span<fontIconProps>`
  font-family: 'font-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${(props) => props.size}px;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: ${(props) => `'${props.content}'`};
  }

  ${({ $cursorPointer }) =>
    $cursorPointer &&
    `
    cursor: pointer;
  `}
`;
