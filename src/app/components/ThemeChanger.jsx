import { useTheme } from "next-themes"

const ThemeChanger = () => {
    const [theme,setTheme] = useTheme();
  return (
    <div>ThemeChanger</div>
  )
}

export default ThemeChanger