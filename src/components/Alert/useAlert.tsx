// useAlert.tsx
import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import { Transition } from '@headlessui/react';

type Toast = {
  text: string;
  variant?: "success" | "danger" | "warning" | "info";
  size?: "small" | "large";
  title?: string;
  onClose: () => void;
};

export default function useAlert() {
  const [list, setAlerts] = useState<Toast[]>([]);

  const createToast = (options: Toast): void => {
    setAlerts([...list, options]);

    setTimeout(() => {
      closeAlert(options.onClose);
    }, 5000);
  };

  const closeAlert = (onClose: () => void): void => {
    setAlerts((alerts) => alerts.slice(1));
    onClose();
  };

  return {
    alerts: (
      <div className="absolute top-1 right-2">
            <div>
              {list.map((t, index) => (
                <Alert
                  key={index}
                  variant={t.variant}
                  size={t.size}
                  title={t.title}
                  onClose={() => closeAlert(t.onClose)}
                >
                  {t.text}
                </Alert>
              ))}
            </div>
      </div>
    ),
    createToast,
  };
}
