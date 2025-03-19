import { JSX } from "react";

import { useAppDispatch } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";

import UFO from "../../../src/assets/ufo.png";
import Search from "../../../src/assets/search.png";

type Type = 'loading' | 'notFound' | 'search';

type ErrorProps = {
    type:Type
}


type ErrorState = {
  title: string;
  promise: string;
  button?: string;
};

const ErrorState : Record<Type, ErrorState> = {
    loading: {
        title:'Какой-то сверхразум все сломал',
        promise:'Постараемся быстро починить',
        button:'Попробовать снова'
    },
    notFound: {
        title:'Человека не найдено',
        promise:'Поищите в другом месте',
    },
    search: {
        title:'Мы никого не нашли',
        promise:'Попробуй скорректировать запрос',
      }
  };


function Error ({type}: ErrorProps):JSX.Element {
    const dispatch = useAppDispatch();
    const ButtonClickHandler = () => {
        dispatch(fetchPeople('all'))
    };

    const errorType = ErrorState[type]
    return(
    <div className="employee-error">
        <img src={type === 'loading' ? UFO : Search} width={56} height={56} />
        <span className="employee-error__title">{errorType.title}</span>
        <span className="employee-error__promise">{errorType.promise}</span>

        {errorType.button && (
          <button className="employee-error__button" onClick={ButtonClickHandler}>
            {errorType.button}
          </button>
        )}
    </div>
      )
};

export default Error;

