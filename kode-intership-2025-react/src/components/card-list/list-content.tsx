import { JSX } from "react";
import React from "react";

import Divider from "../divider/divider";
import ErrorLoading from "../error-loading/error-loading";
import ErrorEmptySearch from "../error-empty-search/error-empty-search";
import Card from "../card/card";

import { Person } from "../../types/person";
import { useAppSelector } from "../../store/hooks";

const LOADING_CARD_COUNT = 4;




function ListContent ():JSX.Element {
    const people = useAppSelector((state) => state.people.copyPeople);
    const sortBy = useAppSelector((state) => state.people.sortBy);
    const searchBy = useAppSelector((state) => state.people.searchBy)

    
    const status = useAppSelector((state) => state.people.status);

    let isDividerRendered:boolean = false;


    if(status === 'failed') {
        return <ErrorLoading/>
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

    const renderEmptySearch = (people:Person[], search:string):JSX.Element | null => {
        if(people.length === 0 && search.length !== 0) {
            return(
                <ErrorEmptySearch />
            )
        }
        return null;
    };


    return (
        <React.Fragment>
            {people.map((person) => (
                <React.Fragment key={person.id}>
                    {sortBy === "birthday" && !isDividerRendered ? renderHideDivider(person) : null}
                    <Card person={person} type='succeeded'/>
                </React.Fragment>
            ))}
            {renderEmptySearch(people, searchBy)}
        </React.Fragment>
)
};

export default ListContent; 