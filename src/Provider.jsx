"use client";
import { ThemeProvider } from "next-themes"

const Provider = ({children}) => {
  return (
    <ThemeProvider enableSystem={true}>
        {children}
    </ThemeProvider>
  )
}

export default Provider