import { JSX } from "react";

function LoadingCard ():JSX.Element {
    return (
    <li className="employee-list__card">
        <div className="employee-list__card-img loading"></div>
        <div className="employee-list__card-text-container">
          <div className="employee-list__card-name loading loading-name"></div>
          <div className="employee-list__card-job-title loading loading-job"></div>
        </div>
      </li>
    )
}

export default LoadingCard;