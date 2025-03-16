import { JSX } from "react";

type DividerProps = {
    date: string;
}

function Divider({date}:DividerProps):JSX.Element {
return(
    <li className='divider'>
        <div className='divider-line'></div>
        <span className='divider-text'>{date}</span>
        <div className='divider-line'></div>
    </li>
);
}

export default Divider;