import { JSX } from "react";


import { Person } from "../../types/person";


type CardProps = {
  person:Person;
}


function Card ({person}:CardProps):JSX.Element {
    return(
    <li className="employee-list__card">
        <img
          className="employee-list__card-img"
          src={person.avatarUrl}
          alt="avatar"
        />
        <div className="employee-list__card-text-container">
          <h3 className="employee-list__card-name">
            {`${person.firstName} ${person.lastName}`} <span className="employee-list__card-name-job">{person.userTag}</span>
          </h3>
          <span className="employee-list__card-job-title">{person.position}</span>
        </div>
      </li>
      )
}


export default Card;
