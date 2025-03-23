import { JSX, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";


import Error from "../components/error/error";
import LoadingStub from "../components/loading-stub/loading-stub";
import PersonMainInfo from "../components/person-main-info/person-main-info";
import PersonSecondInfo from "../components/person-second-info/person-second-info";

import { fetchPeople } from "../store/peopleStorageSlice";

function PeopleInfo():JSX.Element {

    const id = useParams().id;
    
    const dispatch = useAppDispatch();
    const people = useAppSelector((state) => state.peopleStorage.cache.all.data);
    const status = useAppSelector((state) => state.peopleStorage.status);
    
    const currentPerson = people.find((person)=> person.id === id);
    console.log(currentPerson);
    console.log(status);


    useEffect(() => {
        if (!people.length) {
          dispatch(fetchPeople('all'));
        }
      }, [dispatch, people.length]);



    if((status === 'idle' || status==='loading') && !currentPerson) {
        return(
            <LoadingStub />
        )
    }

    if(status=== 'failed') {
        return(
            <ul>
                <Error type="loading"/>
            </ul>
        )
    }

    if(!currentPerson) {
        return(
        <ul>
            <Error type="notFound"/>
        </ul>
        )
    }
    
    return(
        <>
  <PersonMainInfo person={currentPerson}/>
  <PersonSecondInfo person={currentPerson}/>
</>

    )
}

export default PeopleInfo;
