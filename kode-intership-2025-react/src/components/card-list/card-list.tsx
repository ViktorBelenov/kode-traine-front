import { JSX, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";



import JobList from "../job-list/job-list";
import Card from "../card/card";




function CardList ():JSX.Element {
    const dispatch = useAppDispatch();
    const { people } = useAppSelector((state) => state.people);
  
    useEffect(() => {
      dispatch(fetchPeople());
    }, [dispatch]);
  

    console.log(people);


    return (
    <main>
        <section className="employee-list">
            <JobList />
            <div className="employee-list__wrapper">
                <ul className="employee-list__list">
                {people.map((person) => (
                    <Card key={person.id} person={person} /> 
                ))}
                </ul>
            </div>
        </section>
    </main>
    );
};

export default CardList;