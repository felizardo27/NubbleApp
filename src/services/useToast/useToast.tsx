import React, {createContext, useContext, useState} from 'react';

interface Toast {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, SetToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    SetToast(_toast);
  }

  function hiddenToast() {
    SetToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const {toast, showToast, hiddenToast} = useContext(ToastContext);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
