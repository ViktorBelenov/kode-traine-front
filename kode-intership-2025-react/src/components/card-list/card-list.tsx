import { JSX } from "react";

import { Person } from "../../types/person";

import JobList from "../job-list/job-list";
import Card from "../card/card";


type CardListProps = {
    persons:Person[];
}

function CardList ({persons}:CardListProps):JSX.Element {
    return (
    <main>
        <section className="employee-list">
            <JobList />
            <div className="employee-list__wrapper">
                <ul className="employee-list__list">
                    <Card person={persons[0]}/>
                </ul>
            </div>
        </section>
    </main>
    );
};

export default CardList;