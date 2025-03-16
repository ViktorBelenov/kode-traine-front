import { JSX, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPeople } from "../../store/peopleSlice";


import JobList from "../job-list/job-list";
import Card from "../card/card";
import Divider from "../divider/divider";
import { Person } from "../../types/person";
import React from "react";



function CardList ():JSX.Element {
    const dispatch = useAppDispatch();
    const { people } = useAppSelector((state) => state.people);
    const sortBy = useAppSelector((state) => state.people.sortBy);
  
    useEffect(() => {
      dispatch(fetchPeople('all'));
    }, [dispatch]);
    
    const renderHideDivider = (firstPerson:Person, secondPerson:Person):JSX.Element | null => {
        if(!secondPerson) {
            return null;
        }

        const firstDate = new Date(firstPerson.birthday);
        const secondDate = new Date(secondPerson.birthday); 
        if(firstDate.getFullYear() != secondDate.getFullYear()) {
            return <Divider date={secondDate.getFullYear().toString()} />
        }

        return null;
    };
  
    return (
    <main>
        <section className="employee-list">
            <JobList />
            <div className="employee-list__wrapper">
                <ul className="employee-list__list">
                    {
                        people.map((person, index, arr) => (
                        <React.Fragment key={person.id}>
                            <Card person={person} />
                            {sortBy === "birthday" && renderHideDivider(person, arr[index + 1])}
                        </React.Fragment>
                        ))
                    }
                </ul>
            </div>
        </section>
    </main>
    );
};

export default CardList;