export function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded-md font-semibold transition";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
