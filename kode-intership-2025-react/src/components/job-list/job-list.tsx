import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilterBy, fetchPeople } from "../../store/peopleSlice";

import CurrentFilters from "./job-list-const";
import { TFilter } from "../../types/person";


function JobList():JSX.Element {

  const dispatch = useAppDispatch();
  const filterBy = useAppSelector((state) => state.people.filterBy);

  const handleFilterChange = (filterBy: TFilter) => {
    dispatch(setFilterBy(filterBy));
    dispatch(fetchPeople(filterBy));
};

    return (
    <ul className="employee-list__job-list">
        {CurrentFilters
        .map(([key, value]) => (
          <li key={key} className={`employee-list__job-item ${key === filterBy ? 'employee-list__job-item--active':''}`} onClick={() => handleFilterChange(key as TFilter)}>
            {value.title}
          </li>
        ))}
    </ul>
    );
}

export default JobList;