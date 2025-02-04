"use client"

import { createContext, useContext, useReducer } from "react"

export type ToasterToast = {
  id: string
  message: string
  type?: "success" | "error" | "info" | "warning"
  autoDismiss?: number
  dismissed?: boolean
}

enum ActionType {
  ADD_TOAST = "ADD_TOAST",
  UPDATE_TOAST = "UPDATE_TOAST",
  DISMISS_TOAST = "DISMISS_TOAST",
  REMOVE_TOAST = "REMOVE_TOAST",
}

type Action =
  | {
      type: ActionType.ADD_TOAST
      toast: ToasterToast
    }
  | {
      type: ActionType.UPDATE_TOAST
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType.DISMISS_TOAST
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType.REMOVE_TOAST
      toastId?: ToasterToast["id"]
    }

const initialState: ToasterToast[] = []

const reducer = (state: ToasterToast[], action: Action): ToasterToast[] => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return [action.toast, ...state]
    case ActionType.UPDATE_TOAST:
      return state.map((toast) => (toast.id === action.toast.id ? { ...toast, ...action.toast } : toast))
    case ActionType.DISMISS_TOAST:
      return state.map((toast) =>
        action.toastId && toast.id === action.toastId ? { ...toast, dismissed: true } : toast,
      )
    case ActionType.REMOVE_TOAST:
      return state.filter((toast) => toast.id !== action.toastId)
    default:
      return state
  }
}

const ToastContext = createContext<{
  state: ToasterToast[]
  dispatch: React.Dispatch<Action>
}>({ state: [], dispatch: () => {} })

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <ToastContext.Provider value={{ state, dispatch }}>{children}</ToastContext.Provider>
}

export const useToast = () => {
  const { state, dispatch } = useContext(ToastContext)

  const generateId = () => {
    return Math.random().toString(36).substring(2, 9)
  }

  const addToast = (toast: Omit<ToasterToast, "id">) => {
    const newToast = { ...toast, id: generateId() }
    dispatch({ type: ActionType.ADD_TOAST, toast: newToast })
  }

  const updateToast = (toast: Partial<ToasterToast>) => {
    dispatch({ type: ActionType.UPDATE_TOAST, toast })
  }

  const dismissToast = (toastId?: ToasterToast["id"]) => {
    dispatch({ type: ActionType.DISMISS_TOAST, toastId })
  }

  const removeToast = (toastId?: ToasterToast["id"]) => {
    dispatch({ type: ActionType.REMOVE_TOAST, toastId })
  }

  return {
    toasts: state,
    addToast,
    updateToast,
    dismissToast,
    removeToast,
  }
}
