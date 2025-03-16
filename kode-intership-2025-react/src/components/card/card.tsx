import { JSX } from "react";


import { Person } from "../../types/person";
import { useAppSelector } from "../../store/hooks";

import getHumanDate from "../../utils";


type CardProps = {
  person:Person;
}


function Card ({person}:CardProps):JSX.Element {

    const sortBy = useAppSelector((state) => state.people.sortBy);

    const showHideBirthday = (sortBy:string):JSX.Element | undefined => {
      return sortBy === 'birthday' ?                
      <div className="employee-list__card-birthdate">
        <span className="employee-list__card-birthdate-text">{getHumanDate(person.birthday)}</span>
      </div> : undefined;
    }

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
        {showHideBirthday(sortBy)}

      </li>
      )
}


export default Card;
