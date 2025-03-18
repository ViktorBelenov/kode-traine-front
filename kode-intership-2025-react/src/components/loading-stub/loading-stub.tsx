import { JSX } from 'react';

function LoadingStub ():JSX.Element {
  return (
    <div className="employee-error">
        <span className="employee-error__title">Идёт загрузка</span>
        <span className="employee-error__promise">Пожалуйста подождите...</span>
    </div>
  );
};


export default LoadingStub;
