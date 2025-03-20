import { JSX } from "react";

import { useAppSelector } from "../../store/hooks";

import { getHumanDate } from "../../utils";

import { Person } from "../../types/person";
import LoadingCard from "./loading-card";

import { SCard, SCardImg, SCardJob, SCardName, SCardTag, SCardBirthdayContainer, SCardBirthdayText } from "./card-style";
import { Link } from "react-router-dom";

type CardType =  'loading' | 'succeeded'

type CardProps = {
  type: Extract<CardType, 'succeeded'>;
  person:Person;
} | {
  type: Exclude<CardType, 'succeeded'>;
  person?:Person;
}

function Card ({person, type}:CardProps):JSX.Element {
  const sortBy = useAppSelector((state) => state.people.sortBy);
    
    if(type === 'loading') {
      return (
        <LoadingCard />
      )
    }

    const showHideBirthday = (sortBy: string): JSX.Element | null => {
      if (sortBy !== "birthday") return null;
    
      return (
        <SCardBirthdayContainer>
          <SCardBirthdayText>{getHumanDate(person.birthday)}</SCardBirthdayText>
        </SCardBirthdayContainer>
      );
    };

    return(
    <li>
      <Link to={`/person/${person.id}`}>
        <SCard>
          <SCardImg src={person.avatarUrl} alt="avatar"/>
          <div>
            <SCardName>
              {`${person.firstName} ${person.lastName}`} <SCardTag>{person.userTag}</SCardTag>
            </SCardName>
            <SCardJob>{person.position}</SCardJob>
          </div>
          {showHideBirthday(sortBy)}
        </SCard>
      </Link>
    </li>
      )
}


export default Card;
