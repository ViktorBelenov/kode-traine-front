import { JSX, ChangeEvent } from "react";

import { SThemeSwitchLabel, SThemeSlider, SThemeSwitchInput } from "./theme-switch-style";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { setTheme } from "../../store/utilitySlice";

function ThemeSwitch ():JSX.Element {
    const theme = useAppSelector((state)=> state.utility.theme)
    const dispatch = useAppDispatch();



    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTheme(e.target.checked ? "white" : "dark"));
    };

    return (
    <SThemeSwitchLabel>
        <SThemeSwitchInput type="checkbox" onChange={handleToggle} checked={theme === "white"}/>
        <SThemeSlider className="slider"/>
    </SThemeSwitchLabel>
    )
}

export default ThemeSwitch;