import { JSX, useEffect } from "react";


import { useAppDispatch} from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";


import JobList from "../job-list/job-list";
import ListContent from "../card-list/list-content";


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
                <ul className="employee-list__list">
                    <ListContent />
                </ul>
            </div>
        </section>
    </main>
    );
};

export default MainContent;