import { JSX } from 'react';
import { SError, SErrorTitle, SErrorPromise } from '../error/error-style';

function LoadingStub ():JSX.Element {
  return (
    <SError>
        <SErrorTitle>Идёт загрузка</SErrorTitle>
        <SErrorPromise>Пожалуйста подождите...</SErrorPromise>
    </SError>
  );
};


export default LoadingStub;
