import { JSX } from "react";

import { useAppDispatch } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";
import { SError, SErrorTitle, SErrorPromise, SErrorButton } from "./error-style";

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
    <SError>
        <img src={type === 'loading' ? UFO : Search} width={56} height={56} />
        <SErrorTitle>{errorType.title}</SErrorTitle>
        <SErrorPromise>{errorType.promise}</SErrorPromise>

        {errorType.button && (
          <SErrorButton onClick={ButtonClickHandler}>
            {errorType.button}
          </SErrorButton>           
        )}
    </SError>
      )
};

export default Error;

