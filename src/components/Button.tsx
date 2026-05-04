import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';

const PRIMARY_SHADOW =
  '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)';

const SECONDARY_SHADOW = '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)';

const TERTIARY_SHADOW =
  '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08), 0 1px 2px 0 rgba(5,26,36,0.05), inset 0 2px 8px 0 rgba(255,255,255,0.6)';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-tight transition-opacity hover:opacity-90 whitespace-nowrap';

function variantClasses(variant: Variant) {
  switch (variant) {
    case 'primary':
      return 'bg-[#051A24] text-white';
    case 'secondary':
      return 'bg-white text-[#051A24]';
    case 'tertiary':
      return 'bg-white text-[#051A24]';
  }
}

function variantShadow(variant: Variant) {
  switch (variant) {
    case 'primary':
      return PRIMARY_SHADOW;
    case 'secondary':
      return SECONDARY_SHADOW;
    case 'tertiary':
      return TERTIARY_SHADOW;
  }
}

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
  };

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', children, className = '', ...rest } = props as CommonProps & {
    href?: string;
  };

  const style = { boxShadow: variantShadow(variant) } as const;
  const finalClass = `${baseClasses} ${variantClasses(variant)} ${className}`;

  if ('href' in rest && rest.href) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={finalClass} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={finalClass} style={style}>
      {children}
    </button>
  );
}

export default Button;
