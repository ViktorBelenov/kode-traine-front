import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFilterBy } from "../../store/peopleSlice";

import { fetchPeople } from "../../store/peopleStorageSlice";

import { SJobList, SJobListButton } from "./job-list-style";

import CurrentFilters from "./job-list-const";
import { TFilter } from "../../types/person";


function JobList():JSX.Element {

  const dispatch = useAppDispatch();
  const filterBy = useAppSelector((state) => state.people.filterBy);
  const status = useAppSelector((state) => state.peopleStorage.status);

  const handleFilterChange = (filterBy: TFilter) => {
    dispatch(setFilterBy(filterBy));
    dispatch(fetchPeople(filterBy));
};

    return (
      <SJobList>
        {CurrentFilters
        .map(([key, value]) => (
          <li key={key}>
            <SJobListButton 
              $active={key === filterBy}
              onClick={() => handleFilterChange(key as TFilter)}
              disabled={status==="loading" || status==='idle'} 
              >
              {value.title}
            </SJobListButton>
          </li>
        ))}
      </SJobList>

    );
}

export default JobList;