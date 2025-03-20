import { JSX } from "react";
import { SEmptyCard, SEmptyCardImg, SEmptyCardJob, SEmptyCardName } from "./card-style";


function LoadingCard ():JSX.Element {
    return (
    <SEmptyCard>
        <SEmptyCardImg></SEmptyCardImg>
        <div>
          <SEmptyCardName></SEmptyCardName>
          <SEmptyCardJob></SEmptyCardJob>
        </div>
    </SEmptyCard>
    )
}

export default LoadingCard;