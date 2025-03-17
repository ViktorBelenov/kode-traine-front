import { JSX } from "react";
import React from "react";

import Divider from "../divider/divider";
import ErrorLoading from "../error-loading/error-loading";
import Card from "../card/card";

import { Person } from "../../types/person";
import { useAppSelector } from "../../store/hooks";




function ListContent ():JSX.Element {
    const people = useAppSelector((state) => state.people.people);
    const sortBy = useAppSelector((state) => state.people.sortBy);
    
    const status = useAppSelector((state) => state.people.status);

    if(status === 'failed') {
        return <ErrorLoading/>
    }


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
        <React.Fragment>
         {people.map((person, index, arr) => (
            <React.Fragment key={person.id}>
                <Card person={person} />
                {sortBy === "birthday" && renderHideDivider(person, arr[index + 1])}
            </React.Fragment>
            ))}
        </React.Fragment>
)
};

export default ListContent; 