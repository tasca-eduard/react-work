import { createContext, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export type TTheme = "dark" | "light";
export type TAccent = "yellow" | "blue";

export type TThemeContext = {
  theme: TTheme,
  setTheme: (theme: TTheme) => void,
  accent: TAccent,
  setAccent: (accent: TAccent) => void
};

const ThemeContext = createContext<TThemeContext>({
  theme: "dark",
  setTheme: () => {},
  accent: "yellow",
  setAccent: () => {}
});

export const ThemeProvider:React.FC<Props> = ({ children }) => {
  const storageTheme = localStorage.getItem("theme");
  const storageAccent = localStorage.getItem("accent");
  const [theme, setTheme] = useState<TTheme>(storageTheme as TTheme ?? "dark") ;
  const [accent, setAccent] = useState<TAccent>(storageAccent as TAccent ?? "yellow");
 
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("accent", accent)
  }, [theme, accent])

  return (
    <ThemeContext.Provider value={{
      theme, setTheme,
      accent, setAccent
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;