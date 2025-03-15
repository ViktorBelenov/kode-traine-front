import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSortBy, fetchPeople } from "../../store/peopleSlice";

import CurrentFilters from "./job-list-const";
import { TFilter } from "../../types/person";


function JobList():JSX.Element {

  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.people.sortBy);

  const handleSortChange = (sortBy: TFilter) => {
    dispatch(setSortBy(sortBy));
    dispatch(fetchPeople(sortBy));
};

    return (
    <ul className="employee-list__job-list">
        {CurrentFilters
        .map(([key, value]) => (
          <li key={key} className={`employee-list__job-item ${key === sortBy ? 'employee-list__job-item--active':''}`} onClick={() => handleSortChange(key as TFilter)}>
            {value.title}
          </li>
        ))}
    </ul>
    );
}

export default JobList;