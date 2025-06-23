// import React from 'react';

// interface ButtonProps {
//   label: string;
//   variant?: 'primary' | 'secondary';
//   disabled?: boolean;
// }

// const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', disabled = false }) => {
//   const base = 'px-4 py-2 rounded font-semibold';
//   const styles = variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';
//   const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

//   return <button className={`${base} ${styles} ${disabledStyle}`}>{label}</button>;
// };

// export default Button;

import React from 'react';

import './button.css';

export interface ButtonProps {
  variant?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const mode = variant === "primary" ? 'storybook-button--primary' : 'storybook-button--secondary';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, disabledStyle].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;
