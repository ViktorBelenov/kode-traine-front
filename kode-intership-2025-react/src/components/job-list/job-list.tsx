import { JSX } from "react";

import CurrentFilters from "./job-list-const";


function JobList():JSX.Element {
    return (
    <ul className="employee-list__job-list">
        {CurrentFilters
        .map(([key, value]) => (
          <li key={key} className="employee-list__job-item">
            {value.title}
          </li>
        ))}
    </ul>
    );
}

export default JobList;