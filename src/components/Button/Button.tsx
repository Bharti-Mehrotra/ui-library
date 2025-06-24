import './button.css';

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger"
}


export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}


export interface ButtonProps {
  type?: ButtonType;
  backgroundColor?: string;
  size?: ButtonSize;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Primary,
  backgroundColor,
  size = ButtonSize.Medium,
  label,
  disabled = false,
  ...props
}) => {

  const className = [
    'btn',
    `btn-${type}`,
    `btn-${size}`,
    disabled ? 'btn-disabled' : '',
  ].join(' ');

  return (
    <button disabled={disabled} className={className} {...props}>
      {label}
    </button>
  );
};
export default Button;
