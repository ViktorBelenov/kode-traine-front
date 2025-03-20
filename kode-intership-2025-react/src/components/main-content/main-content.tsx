import { JSX, useEffect } from "react";


import { useAppDispatch,  useAppSelector } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";

import { SEmployWrapper } from "./main-content-style";

import JobList from "../job-list/job-list";
import PeopleList from "../people-list/people-list";


function MainContent ():JSX.Element {
    const dispatch = useAppDispatch();
    const filterType = useAppSelector((state)=> state.people.filterBy)
  
    useEffect(() => {
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