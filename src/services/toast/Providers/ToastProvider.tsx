import React, {createContext, useState} from 'react';

import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, SetToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: Toast) {
    SetToast(_toast);
  }

  function hideToast() {
    SetToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}
