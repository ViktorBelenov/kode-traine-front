import { JSX } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { fetchPeople } from "../../store/peopleStorageSlice";

import { SError, SErrorTitle, SErrorPromise, SErrorButton } from "./error-style";

import UFO from "../../../src/assets/ufo.png";
import Search from "../../../src/assets/search.png";
import { ErrorState } from "./error-language";



type Type = 'loading' | 'notFound' | 'search';

type ErrorProps = {
    type:Type
}


function Error ({type}: ErrorProps):JSX.Element {
    const dispatch = useAppDispatch();
    const ButtonClickHandler = () => {
        dispatch(fetchPeople('all'))
    };
  const language = useAppSelector((state) => state.utility.language);

    const errorType = ErrorState[language][type]
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

