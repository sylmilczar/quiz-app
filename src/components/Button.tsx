import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export const Button = ({
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-600 hover:bg-primary-700 active:bg-primary-900 text-white ',
    secondary:
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-800 text-secondary-950',
    tertiary:
      'bg-tertiary-600 hover:bg-tertiary-700 active:bg-tertiary-900 text-white',
  };

  return (
    <button
      {...props}
      className={clsx(
        'rounded-sm px-4 py-2 font-medium transition active:scale-95',
        variantClasses[variant],
        className
      )}
    />
  );
};
