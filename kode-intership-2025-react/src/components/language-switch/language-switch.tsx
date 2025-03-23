import { JSX } from "react";
import { ToggleButton, ToggleWrapper } from "./language-switch-style";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLanguage } from "../../store/utilitySlice";


function LanguageSwitch ():JSX.Element {

    const language = useAppSelector((state)=> state.utility.language)
    const dispatch = useAppDispatch();

    
    return (
    <ToggleWrapper>
      <ToggleButton $active={language === "eng"} onClick={() => dispatch(setLanguage("eng"))}>
        EN
      </ToggleButton>
      <ToggleButton $active={language === "rus"} onClick={() =>  dispatch(setLanguage("rus"))}>
        RU
      </ToggleButton>
    </ToggleWrapper>
 )
};

export default LanguageSwitch;