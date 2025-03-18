import { JSX, useEffect } from "react";


import { useAppDispatch} from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";


import JobList from "../job-list/job-list";
import PeopleList from "../people-list/people-list";


function MainContent ():JSX.Element {
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchPeople('all'));
    }, [dispatch]);
    


    return (
    <main>
        <section className="employee-list">
            <JobList />
            <div className="employee-list__wrapper">
                    <PeopleList />
            </div>
        </section>
    </main>
    );
};

export default MainContent;