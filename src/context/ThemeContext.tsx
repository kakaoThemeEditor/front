import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // localStorage에서 저장된 테마를 가져옴
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "light";
  });

  useEffect(() => {
    // 테마가 변경될 때마다 실행
    const root = window.document.documentElement;

    // 기존 테마 클래스 제거
    root.classList.remove("light", "dark");
    // 새로운 테마 클래스 추가
    root.classList.add(theme);

    // 테마 저장
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
