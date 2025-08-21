// src/components/Checkbox.tsx
import React from "react";

export type CheckboxProps = {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: React.ReactNode;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  name,
  label,
  className = "",
}) => {

  return (
    <label
      className={[
        "inline-flex items-center gap-2 cursor-pointer select-none",
        className,
      ].join(" ")}
    >
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
       className="h-4 w-4 rounded accent-green-500 focus:outline-none transition-colors"

      />
      {label && <span className="text-sm leading-none">{label}</span>}
    </label>
  );
};

export default Checkbox;
