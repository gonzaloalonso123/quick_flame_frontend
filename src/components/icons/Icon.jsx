import "material-symbols/outlined.css";
import "./Icon.css";

const icon_class = "material-icons material-symbols-outlined notranslate select-none";
const icon_bold = icon_class + " bold";

export const Icon = ({
  children,
  className = "icon-base",
  fontSize = "24px",
  color = "black",
  bold = false,
}) => (
  <i className={`${bold ? icon_bold : icon_class} ${className}`} style={{ fontSize: fontSize, color: color }} >
    {children}
  </i>
);
