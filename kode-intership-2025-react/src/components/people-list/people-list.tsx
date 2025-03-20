import { JSX } from "react";
import React from "react";

import Divider from "../divider/divider";
import Error from "../error/error";

import Card from "../card/card";

import { Person } from "../../types/person";
import { useAppSelector } from "../../store/hooks";

import { SEmployList } from "./people-list-style";

const LOADING_CARD_COUNT = 4;




function PeopleList ():JSX.Element {
    const people = useAppSelector((state) => state.people.copyPeople);
    const sortBy = useAppSelector((state) => state.people.sortBy);
    const searchBy = useAppSelector((state) => state.people.searchBy)

    
    const status = useAppSelector((state) => state.people.status);

    let isDividerRendered:boolean = false;


    if(status === 'failed') {
        return <Error type="loading"/>
    }

    if(status === 'idle' || status === 'loading') {
        return(
        <>
            {Array.from({ length: LOADING_CARD_COUNT }, (_, index) => (
                <Card key={index}  type="loading"/>
            ))}
        </>
    )
    }

    if(people.length === 0 && searchBy.length !== 0) {
        return <Error type="search"/>   
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
            <SEmployList>
                {people.map((person) => (
                    <React.Fragment key={person.id}>
                        {sortBy === "birthday" && !isDividerRendered ? renderHideDivider(person) : null}
                        <Card person={person} type='succeeded'/>
                    </React.Fragment>
                ))}
            </SEmployList>
        </React.Fragment>
)
};

export default PeopleList; 