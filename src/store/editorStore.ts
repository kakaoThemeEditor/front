import { create } from "zustand";

interface Theme {
  themeId: string;
  themeName: string;
}

interface EditorState {
  currentStyle: string;
  setCurrentStyle: (style: string) => void;
  currentThemeId: string;
  setCurrentThemeId: (themeId: string) => void;

  themeList: Theme[];
  setThemeList: (list: Theme[]) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  currentStyle: "Mainview1",
  setCurrentStyle: (style) => set({ currentStyle: style }),
  currentThemeId: "",
  setCurrentThemeId: function (themeid) {
    set({ currentThemeId: themeid });
  },
  themeList: [],
  setThemeList: (themeList) => set({ themeList }),
}));
