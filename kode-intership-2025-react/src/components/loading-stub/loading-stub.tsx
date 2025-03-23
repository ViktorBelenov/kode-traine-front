import { JSX } from 'react';
import { SError, SErrorTitle, SErrorPromise } from '../error/error-style';

import { LStubTitle, LStubPromise } from './loading-stub-language';
import { useAppSelector } from '../../store/hooks';


function LoadingStub ():JSX.Element {
  const language = useAppSelector((state) => state.utility.language);
  return (
    <SError>
        <SErrorTitle>{ LStubTitle[language] }</SErrorTitle>
        <SErrorPromise>{ LStubPromise[language] }</SErrorPromise>
    </SError>
  );
};


export default LoadingStub;
