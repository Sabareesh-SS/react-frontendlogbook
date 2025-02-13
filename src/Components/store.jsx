import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "admin",
  password: "password123",
  isAuthenticated: false,
  login: (inputUser, inputPass) =>
    set((state) =>
      inputUser === state.username && inputPass === state.password
        ? { isAuthenticated: true }
        : { isAuthenticated: false }
    ),
}));

export default useAuthStore;