import { JSX } from "react";

function Card ():JSX.Element {
    return(
    <li className="employee-list__card">
        <img
          className="employee-list__card-img"
          src="/kode-intership-2025-react/markup/img/cat.jpg"
          alt="avatar"
        />
        <div className="employee-list__card-text-container">
          <h3 className="employee-list__card-name">
            Алексей Миногаров <span className="employee-list__card-name-job">mi</span>
          </h3>
          <span className="employee-list__card-job-title">Analyst</span>
        </div>
      </li>
      )
}


export default Card;
