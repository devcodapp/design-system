import React, { ReactNode, useState, useEffect } from 'react';
import { CheckCircle2, AlertCircleIcon, Info, X } from 'lucide-react';
import { Transition } from '@headlessui/react';

export interface AlertProps {
  title?: string;
  variant?: 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'large';
  children: ReactNode;
  onClose: () => void;
  link?: string;
  textLink?: string
}

export default function Alert({ title, size = 'small', variant = 'info', children, onClose, link, textLink }: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 7000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  const baseStyles = 'w-[500px] p-5 rounded shadow border border-solid m-5 flex gap-3.5 items-start relative';

  const sizeStyles = {
    small: 'h-16 flex',
    large: 'h-32',
  };

  const classVariant = {
    success: 'bg-success-100 border-success-200 ',
    info: 'bg-primary-300 border-primary-7 ',
    danger: 'bg-danger-100 border-danger-200 ',
    warning: 'bg-warning-100 border-warning-200 ',
  };

  return (
    <Transition
      appear
      show={visible}
      enter="transition ease-out duration-400 transform"
      enterFrom="opacity-0 translate-x-1 translate-y-0"
      enterTo="opacity-100 translate-x-0 translate-y-0"
      leave="transition ease-out duration-400 transform"
      leaveFrom="opacity-100 translate-x-1 translate-y-0"
      leaveTo="opacity-0 translate-x-2 translate-y-0"
    >
      <div className={`${classVariant[variant]} ${baseStyles} ${sizeStyles[size]}`}>
        <div className="w-4">
          {variant === 'success' ? (
            <CheckCircle2 size={16} className="text-success-600" />
          ) : variant === 'danger' ? (
            <AlertCircleIcon size={16} className="text-danger-600" />
          ) : variant === 'warning' ? (
            <AlertCircleIcon size={16} className="text-warning-600" />
          ) : (
            <Info size={16} className="text-primary-600" />
          )}
        </div>
        <div className={`text-sm ${sizeStyles[size]} ${size === 'large' ? 'mr-2 justify-start text-start' : 'flex  mr-2'}`}>
          {title && <p className="font-bold text-sm mb-1 mr-1">{title}</p>}
          {children}
          {link && ( <a href={link} className="text-blue-500 underline ml-2" target="_blank" rel="noopener noreferrer"> {textLink || link} </a> )}
        </div>
        <button
          onClick={() => {
            setVisible(false);
            onClose && onClose();
          }}
        >
          <X size={16} className="absolute right-5 neutral-700" />
        </button>
      </div>
    </Transition>
  );
}
