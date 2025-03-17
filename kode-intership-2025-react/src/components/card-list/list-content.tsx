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

    let isDividerRendered:boolean = false;


    if(status === 'failed') {
        return <ErrorLoading/>
    }


    const renderHideDivider = (person:Person):JSX.Element | null => {
        const today = new Date();
        const currentYear = today.getFullYear();

    
        const personDate = new Date(person.birthday);
        personDate.setFullYear(currentYear);
        if(personDate < today) {
            isDividerRendered = true;
            return <Divider date={[currentYear + 1].toString()} />
        }
        return null;
    };


    return (
        <React.Fragment>
         {people.map((person) => (
            <React.Fragment key={person.id}>
                {sortBy === "birthday" && !isDividerRendered ? renderHideDivider(person) : null}
                <Card person={person} />
            </React.Fragment>
            ))}
        </React.Fragment>
)
};

export default ListContent; 