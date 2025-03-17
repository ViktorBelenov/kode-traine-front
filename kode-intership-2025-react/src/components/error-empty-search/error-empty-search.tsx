import { JSX } from "react"
import Search from "../../../src/assets/search.png";

function ErrorEmptySearch ():JSX.Element {
    return(
        <li className="employee-error">
        <img src={Search} width={56} height={56} />
        <span className="employee-error__title">Мы никого не нашли</span>
        <span className="employee-error__promise">Попробуй скорректировать запрос</span>
    </li>)
};

export default ErrorEmptySearch;