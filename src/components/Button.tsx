'use client'

import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Loader } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'secondary' | 'ternary'
  size?: 'small' | 'medium' | 'large'
}

const getButtonProps = (variant: 'primary' | 'secondary' | 'ternary', size: 'small' | 'medium' | 'large') => {
  const baseSize = {
    small: 'py-2',
    medium: 'py-3',    
    large: 'py-4',
  }

  const variantStyles: Record<string, Record<string, string>> = {
    primary: {
      base: 'border border-neutral-0 text-neutral-0 font-bold bg-primary-button-600 hover:bg-primary-button-500 focus:bg-primary-700 focus:border-solid disabled:bg-neutral-150',
      loadingColor: 'text-[#fff]',
    },
    secondary: {
      base: 'bg-primary-100 dark:bg-dark-primary-100 border border-primary-200 dark:border-dark-primary-200 text-primary-600 dark:text-dark-primary-600 hover:bg-neutral-0 dark:hover:bg-dark-neutral-0',
      loadingColor: 'text-[#ff9965]',
    },
    ternary: {
      base: 'bg-neutral-0 border border-neutral-200 text-neutral-800 hover:bg-neutral-100',
      loadingColor: 'text-[#32324D]'
    },
  }

  return { 
    buttonStyle: `${baseSize[size]} ${variantStyles[variant].base} body-semi inline-flex items-center justify-center rounded px-4 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2 focus:ring-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600 loading:cursor-not-allowed`,
    loadingColor: variantStyles[variant].loadingColor,
  }

}

export const Button = ({ 
  children,
  loading, 
  variant = 'primary',
  size = 'small',
  loadingText,
  className, 
  ...props 
}: ButtonProps) => {
  const { buttonStyle, loadingColor } = getButtonProps(variant, size)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if(loading){
      event.preventDefault()
    }else {
      props.onClick && props.onClick(event)
    }
  }

  return (
    <button 
      className={twMerge(buttonStyle, 'group', loading && 'cursor-wait', className)} 
      {...props}
      onClick={handleClick}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <Loader size={18} className={twMerge('animate-spin', loadingColor, 'group-disabled:text-neutral-600')} />
          <span>
            {loadingText || 'Carregando...'}
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  )
} 