import { create } from "zustand";
import {
  validationByName,
  validationByEmail,
  validationByMessage,
} from "@/app/lib/utils/Validations";

interface FormState {
  name: string
  email: string
  message: string
  errors: {
    name: string
    email: string
    message: string
  }
  setName: (name: string) => void
  setEmail: (email: string) => void
  setMessage: (message: string) => void
}

export const useFormStore = create<FormState>((set) => ({
  name: "",
  email: "",
  message: "",
  errors: {
    name: "",
    email: "",
    message: "",
  },

  setName: (name) =>
    set((state) => ({
      name,
      errors: { ...state.errors, name: validationByName(name) },
    })),
  setEmail: (email) =>
    set((state) => ({
      email,
      errors: { ...state.errors, email: validationByEmail(email) },
    })),
  setMessage: (message) =>
    set((state) => ({
      message,
      errors: { ...state.errors, message: validationByMessage(message) },
    })),
}));
