import { JSX } from "react";

import JobList from "../job-list/job-list";
import Card from "../card/card";

function CardList ():JSX.Element {
    return (
    <main>
        <section className="employee-list">
            <JobList />
            <div className="employee-list__wrapper">
                <ul className="employee-list__list">
                    <Card />
                </ul>
            </div>
        </section>
    </main>
    );
};

export default CardList;