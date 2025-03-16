import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilterBy, fetchPeople } from "../../store/peopleSlice";

import CurrentFilters from "./job-list-const";
import { TFilter } from "../../types/person";


function JobList():JSX.Element {

  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.people.filterBy);

  const handleFilterChange = (sortBy: TFilter) => {
    dispatch(setFilterBy(sortBy));
    dispatch(fetchPeople(sortBy));
};

    return (
    <ul className="employee-list__job-list">
        {CurrentFilters
        .map(([key, value]) => (
          <li key={key} className={`employee-list__job-item ${key === sortBy ? 'employee-list__job-item--active':''}`} onClick={() => handleFilterChange(key as TFilter)}>
            {value.title}
          </li>
        ))}
    </ul>
    );
}

export default JobList;