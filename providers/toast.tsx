"use client";

import * as React from "react";
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

import { cn } from "@/components/ui/utils";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  onClose: (id: string) => void;
}

const Toast = ({
  id,
  title,
  description,
  type = "info",
  onClose,
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 5000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-xl border p-4 shadow-2xl transition-all animate-in slide-in-from-right-full duration-300",
        "bg-zinc-950/90 backdrop-blur-2xl border-zinc-800 text-zinc-100"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icons[type]}</div>
        <div className="grid gap-1">
          {title && (
            <div className="text-sm font-bold tracking-tight">{title}</div>
          )}
          {description && (
            <div className="text-xs text-zinc-400 leading-relaxed font-medium line-clamp-2">
              {description}
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => onClose(id)}
        className="rounded-lg p-1 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900 transition-colors shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 transition-all",
          type === "success" && "bg-green-500",
          type === "error" && "bg-red-500",
          type === "info" && "bg-blue-500"
        )}
        style={{ animation: "toast-progress 5s linear forwards" }}
      />
    </div>
  );
};

interface ToastContextType {
  toast: (props: Omit<ToastProps, "id" | "onClose">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Omit<ToastProps, "onClose">[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, type }: Omit<ToastProps, "id" | "onClose">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-4 sm:right-4 sm:top-auto sm:flex-col md:max-w-[380px] gap-3">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={removeToast} />
        ))}
      </div>
      <style jsx global>{`
        @keyframes toast-progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
};
