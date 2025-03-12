import { JSX } from "react";


function JobList():JSX.Element {
    return (
    <ul className="employee-list__job-list">
        <li className="employee-list__job-item employee-list__job-item--active">
            Все
        </li>
        <li className="employee-list__job-item">Designers</li>
        <li className="employee-list__job-item">Analysts</li>
        <li className="employee-list__job-item">Managers</li>
        <li className="employee-list__job-item">iOS</li>
        <li className="employee-list__job-item">Android</li>
    </ul>
    );
}

export default JobList;