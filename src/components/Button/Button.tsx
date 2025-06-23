import './button.css';

export interface ButtonProps {
  variant?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}) => {
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
