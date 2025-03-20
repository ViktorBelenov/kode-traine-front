import { JSX } from "react";

import { SThemeSwitchLabel, SThemeSlider, SThemeSwitchInput } from "./theme-switch-style";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store/themeSlice";
function ThemeSwitch ():JSX.Element {
    const theme = useAppSelector((state)=> state.theme.theme)
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(setTheme()); 
    };

    return (
    <SThemeSwitchLabel>
        <SThemeSwitchInput type="checkbox" onChange={handleToggle} checked={theme === "white"}/>
        <SThemeSlider className="slider"/>
    </SThemeSwitchLabel>
    )
}

export default ThemeSwitch;