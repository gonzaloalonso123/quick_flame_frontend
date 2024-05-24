const base_class = "px-4 py-2 rounded-md outline-primary bg-gray-50 border";

export default ({ className, children, ...props }) => (
  <input className={`${base_class} ${className}`} {...props}>
    {children}
  </input>
);
