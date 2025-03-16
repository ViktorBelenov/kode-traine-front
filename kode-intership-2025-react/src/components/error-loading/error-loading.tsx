import { JSX } from "react";

import { useAppDispatch } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";

import UFO from "../../../src/assets/ufo.png";



function ErrorLoading ():JSX.Element {
    const dispatch = useAppDispatch();
    const ButtonClickHandler = () => {
        dispatch(fetchPeople('all'))
    };
    return(
    <li className="employee-error">
        <img src={UFO} width={56} height={56} />
        <span className="employee-error__title">Какой-то сверхразум все сломал</span>
        <span className="employee-error__promise">Постараемся быстро починить</span>
        <button className="employee-error__button" onClick={ButtonClickHandler}>Попробовать снова</button>
    </li>
      )
};

export default ErrorLoading;