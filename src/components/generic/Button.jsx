import { Icon } from "../icons/Icon";

const base_class = "px-4 py-2 rounded-md font-semibold text-md flex items-center bg-qf_orange_1 text-white hover:bg-secondary transition-colors duration-200 ease-in-out";

export default ({ className, icon, children, ...props }) => (
  <button className={`${base_class} ${className}`} {...props}>
    <Icon>{icon}</Icon>
    {children}
  </button>
);
