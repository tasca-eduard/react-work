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
  const [theme, setTheme] = useState<TTheme>("dark") ;
  const [accent, setAccent] = useState<TAccent>("yellow");
 
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