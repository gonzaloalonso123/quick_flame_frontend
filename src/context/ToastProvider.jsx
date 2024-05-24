import { createContext, useContext, useState } from "react";
import { ToastCard } from "../components/toast/Toast";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toast, showToast] = useState(null);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast != null && <ToastCard {...toast} close={() => showToast(null)} />}
    </ToastContext.Provider>
  );
};
