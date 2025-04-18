import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { TSortBy } from "../../types/sort";

import { setSortBy } from "../../store/peopleSlice";

import { SModalContainer, SModalTitle, SModalSort, SModalCloseButton, SModalSortInput, SModalSortInputDescription, SModalSortLabel, SModalSortList } from "./sort-popup-style";

import { LSortPopupTitle, LSortPopupCloseButton, LSortPopupAlphButton, LSortPopupDateButton } from "./sort-popup-language";

type SortPopupProps = {
    handelShowHideSortWindow:()=>void;
}

function SortPopup({handelShowHideSortWindow: handleShowHideSortWindow}:SortPopupProps):JSX.Element {

    const dispatch = useAppDispatch();
    const sortBy = useAppSelector((state) => state.people.sortBy);

    const language = useAppSelector((state) => state.utility.language)

    const handleFilterChange = (sortBy:TSortBy) => {
        dispatch(setSortBy(sortBy));
        handleShowHideSortWindow();
    };

    return (
      <SModalContainer>
        <SModalSort>
          <SModalTitle>{LSortPopupTitle[language]}</SModalTitle>
          <SModalCloseButton onClick={handleShowHideSortWindow}>
            <span className="visually-hidden">{LSortPopupCloseButton[language]}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width={24} height={24} rx={12} fill="#F7F7F8" />
              <path
                d="M16.7364 7.2636C17.0879 7.61508 17.0879 8.18492 16.7364 8.5364L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.5364C6.94142 8.21421 6.91457 7.70853 7.18306 7.35577L7.2636 7.2636C7.61508 6.91213 8.18492 6.91213 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91213 16.3849 6.91213 16.7364 7.2636Z"
                fill="#C3C3C6"
              />
            </svg>
          </SModalCloseButton>
          <form>
          <SModalSortList>
            <li>
              <SModalSortLabel>
              <SModalSortInput
                  className="radio__input visually-hidden"
                  type="radio"
                  name="sort"
                  value="firstName"
                  checked={sortBy === "firstName"}
                  onChange={() => handleFilterChange("firstName")}
              />
              <span className="radio__control-mark" />
              <SModalSortInputDescription>{LSortPopupAlphButton[language]}</SModalSortInputDescription>
              </SModalSortLabel>
            </li>
            <li>
             <SModalSortLabel>
                <SModalSortInput
                  className="radio__input visually-hidden"
                  type="radio"
                  name="sort"
                  value="birthday"
                  checked={sortBy === "birthday"}
                  onChange={() => handleFilterChange("birthday")}
                />
                <span className="radio__control-mark" />
                <SModalSortInputDescription>{LSortPopupDateButton[language]}</SModalSortInputDescription>
              </SModalSortLabel>
            </li>
          </SModalSortList>
          </form>
        </SModalSort>
      </SModalContainer>
      )
}

export default SortPopup;