import { JSX } from "react";
import { SDivider, SDividerLine, SDividerSpan } from "./divider-style";

type DividerProps = {
    date: string;
}

function Divider({date}:DividerProps):JSX.Element {
return(
    <SDivider>
        <SDividerLine></SDividerLine>
        <SDividerSpan>{date}</SDividerSpan>
        <SDividerLine></SDividerLine>
    </SDivider>
);
}

export default Divider;