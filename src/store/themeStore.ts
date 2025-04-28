import { create } from "zustand";

interface ThemeArea {
  color: string;
  image?: string;
}

interface Theme {
  id: string;
  name: string;
  description: string;
  isDefault: boolean;
  areas: {
    header: ThemeArea;
    chatBackground: ThemeArea;
    myMessage: ThemeArea;
    otherMessage: ThemeArea;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface ThemeState {
  themes: Theme[];
  currentTheme: Theme | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchThemes: () => Promise<void>;
  fetchTheme: (id: string) => Promise<void>;
  createTheme: (theme: Omit<Theme, "id" | "createdAt" | "updatedAt">) => Promise<void>;
  updateTheme: (id: string, theme: Partial<Theme>) => Promise<void>;
  deleteTheme: (id: string) => Promise<void>;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  themes: [],
  currentTheme: null,
  loading: false,
  error: null,

  fetchThemes: async () => {
    set({ loading: true, error: null });
    try {
      // TODO: 실제 API 엔드포인트로 변경
      const response = await fetch("/api/themes");
      const data = await response.json();
      set({ themes: data, loading: false });
    } catch (error) {
      set({ error: "테마 목록을 불러오는데 실패했습니다.", loading: false });
    }
  },

  fetchTheme: async (id: string) => {
    set({ loading: true, error: null });
    try {
      // TODO: 실제 API 엔드포인트로 변경
      const response = await fetch(`/api/themes/${id}`);
      const data = await response.json();
      set({ currentTheme: data, loading: false });
    } catch (error) {
      set({ error: "테마를 불러오는데 실패했습니다.", loading: false });
    }
  },

  createTheme: async (theme) => {
    set({ loading: true, error: null });
    try {
      // TODO: 실제 API 엔드포인트로 변경
      const response = await fetch("/api/themes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(theme),
      });
      const data = await response.json();
      set((state) => ({
        themes: [...state.themes, data],
        loading: false,
      }));
    } catch (error) {
      set({ error: "테마 생성에 실패했습니다.", loading: false });
    }
  },

  updateTheme: async (id, theme) => {
    set({ loading: true, error: null });
    try {
      // TODO: 실제 API 엔드포인트로 변경
      const response = await fetch(`/api/themes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(theme),
      });
      const data = await response.json();
      set((state) => ({
        themes: state.themes.map((t) => (t.id === id ? data : t)),
        currentTheme: state.currentTheme?.id === id ? data : state.currentTheme,
        loading: false,
      }));
    } catch (error) {
      set({ error: "테마 수정에 실패했습니다.", loading: false });
    }
  },

  deleteTheme: async (id) => {
    set({ loading: true, error: null });
    try {
      // TODO: 실제 API 엔드포인트로 변경
      await fetch(`/api/themes/${id}`, {
        method: "DELETE",
      });
      set((state) => ({
        themes: state.themes.filter((t) => t.id !== id),
        currentTheme: state.currentTheme?.id === id ? null : state.currentTheme,
        loading: false,
      }));
    } catch (error) {
      set({ error: "테마 삭제에 실패했습니다.", loading: false });
    }
  },
}));
