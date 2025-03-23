import { JSX, useEffect } from "react";


import { useAppDispatch,  useAppSelector } from "../../store/hooks";


import { SEmployWrapper } from "./main-content-style";

import JobList from "../job-list/job-list";
import PeopleList from "../people-list/people-list";
import { fetchPeople } from "../../store/peopleStorageSlice";


function MainContent ():JSX.Element {
    const dispatch = useAppDispatch();
    const filterType = useAppSelector((state)=> state.people.filterBy)
  
    useEffect(() => {
      console.log('gergerg')
      dispatch(fetchPeople(filterType));
    }, [dispatch, filterType]);
    


    return (
    <main>
        <section>
            <JobList />
            <SEmployWrapper>
                <PeopleList />
            </SEmployWrapper>
        </section>
    </main>
    );
};

export default MainContent;