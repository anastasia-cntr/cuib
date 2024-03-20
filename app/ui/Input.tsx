"use client";

import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id, label, type = "text", disabled, formatPrice, required, register, errors
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-4 pt-6 bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed font-[500]
        ${formatPrice ? 'pl-9' : 'pl-4'}
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}`} />
      <label
        className={`absolute text-md duration-150 transform -translate-y-4 top-6 z-10 
        origin-[0] peer-placeholder-shown:scale-80 peer-placeholder-shown:translate-y-0
        ${formatPrice ? 'left-9' : 'left-4'}
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
        {label}
      </label>
    </div>
  );
};

export default Input;