import { create } from "zustand";

interface EditorState {
  currentStyle: string;
  setCurrentStyle: (style: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  currentStyle: "Passcode",
  setCurrentStyle: (style) => set({ currentStyle: style }),
}));
