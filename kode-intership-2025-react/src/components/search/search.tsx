import { JSX, useState, useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { searchPeople, setSearchBy } from "../../store/peopleSlice";

import { SSearch, SSearchIcon, SSearchFieldContainer, SSearchTitle, SSearchWrapper, SSearchForm ,SSearchInput, SSearchIconPopup, SSearchPopupButton, SSearchTitleWrapper, SSearchDisclaimer } from "./search-style";

import SortPopup from "../sort-popup/sort-popup";
import ThemeSwitch from "../theme-switch/theme-switch";
import LanguageSwitch from "../language-switch/language-switch";

import { LSearchText, LDisclaimerText, LSearchPlaceholder } from "./search-language";

function Search():JSX.Element {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector((state) => state.people.sortBy);
    const searchBy = useAppSelector((state) => state.people.searchBy);
    const status = useAppSelector((state) => state.peopleStorage.status);
    const language = useAppSelector((state) => state.utility.language);

    const onlineStatus = useAppSelector((state) => state.peopleStorage.online);

    const disclaimerText = LDisclaimerText[language];

    const disclaimerType = status === 'loading' ? 'loading' : 'offline';

    

    const input = useRef<HTMLInputElement | null>(null);



    const [isSortWindowActive, setWindowState] = useState<boolean>(false);

    const handelShowHideSortWindow = (): void  => {
        setWindowState(!isSortWindowActive);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(searchPeople());
        if(input.current){
            input.current.blur();
        }     
      };

    const isSearchIconActive = searchBy.length != 0;
    const isPopupIconIsActive = sortBy === 'birthday';
    return (
    <>
    <SSearch $isOffline={onlineStatus === 'offline' ? true : false} $isLoading={onlineStatus === 'loading'}>
        <SSearchWrapper>
            <SSearchTitleWrapper>
                <SSearchTitle>{LSearchText[language]}</SSearchTitle>
                <LanguageSwitch></LanguageSwitch>
                <ThemeSwitch></ThemeSwitch>
            </SSearchTitleWrapper>
            <SSearchFieldContainer $isOffline={onlineStatus === 'offline' ? true : false}>

            <SSearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" $active={isSearchIconActive}>
                <path d="M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.94733 18.6996 5.81281 16.9854 4.27667C15.2713 2.74053 13.0337 1.91954 10.7328 1.9825C8.43194 2.04546 6.24263 2.98759 4.61505 4.61517C2.98747 6.24275 2.04534 8.43207 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7738 20.4935 21.8482 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8482 21.6169 21.7738 21.7099 21.68C21.8901 21.4936 21.9909 21.2444 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9923 4.13441 9.63439C4.4045 8.27653 5.07119 7.02925 6.05016 6.05028C7.02912 5.07131 8.27641 4.40463 9.63427 4.13453C10.9921 3.86443 12.3996 4.00306 13.6787 4.53287C14.9578 5.06268 16.051 5.95989 16.8202 7.11103C17.5894 8.26218 17.9999 9.61556 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9498C14.6369 17.2625 12.8564 18 10.9999 18Z"/>
            </SSearchIcon>
            <SSearchForm onSubmit={handleSubmit}>
                <SSearchInput
                    type="text"
                    className="search-input"
                    placeholder={LSearchPlaceholder[language]}
                    value={searchBy}
                    onChange={(e) => dispatch(setSearchBy(e.target.value))}
                    ref={input}
                    disabled={status==="loading" || status==='idle'}
                />
            </SSearchForm>
            <SSearchPopupButton onClick={handelShowHideSortWindow}>
                <SSearchIconPopup xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" $active={isPopupIconIsActive}>
                    <path d="M3.5 6C3.30222 6 3.10888 6.05865 2.94443 6.16853C2.77998 6.27841 2.65181 6.43459 2.57612 6.61732C2.50043 6.80004 2.48063 7.00111 2.51922 7.19509C2.5578 7.38907 2.65304 7.56725 2.79289 7.70711C2.93275 7.84696 3.11093 7.9422 3.30491 7.98079C3.49889 8.01937 3.69996 7.99957 3.88268 7.92388C4.06541 7.84819 4.22159 7.72002 4.33147 7.55557C4.44135 7.39112 4.5 7.19778 4.5 7C4.5 6.73478 4.39464 6.48043 4.20711 6.29289C4.01957 6.10536 3.76522 6 3.5 6ZM7.5 8H21.5C21.7652 8 22.0196 7.89464 22.2071 7.70711C22.3946 7.51957 22.5 7.26522 22.5 7C22.5 6.73478 22.3946 6.48043 22.2071 6.29289C22.0196 6.10536 21.7652 6 21.5 6H7.5C7.23478 6 6.98043 6.10536 6.79289 6.29289C6.60536 6.48043 6.5 6.73478 6.5 7C6.5 7.26522 6.60536 7.51957 6.79289 7.70711C6.98043 7.89464 7.23478 8 7.5 8ZM7.5 11C7.30222 11 7.10888 11.0586 6.94443 11.1685C6.77998 11.2784 6.65181 11.4346 6.57612 11.6173C6.50043 11.8 6.48063 12.0011 6.51922 12.1951C6.5578 12.3891 6.65304 12.5673 6.79289 12.7071C6.93275 12.847 7.11093 12.9422 7.30491 12.9808C7.49889 13.0194 7.69996 12.9996 7.88268 12.9239C8.06541 12.8482 8.22159 12.72 8.33147 12.5556C8.44135 12.3911 8.5 12.1978 8.5 12C8.5 11.7348 8.39464 11.4804 8.20711 11.2929C8.01957 11.1054 7.76522 11 7.5 11ZM11.5 16C11.3022 16 11.1089 16.0586 10.9444 16.1685C10.78 16.2784 10.6518 16.4346 10.5761 16.6173C10.5004 16.8 10.4806 17.0011 10.5192 17.1951C10.5578 17.3891 10.653 17.5673 10.7929 17.7071C10.9327 17.847 11.1109 17.9422 11.3049 17.9808C11.4989 18.0194 11.7 17.9996 11.8827 17.9239C12.0654 17.8482 12.2216 17.72 12.3315 17.5556C12.4414 17.3911 12.5 17.1978 12.5 17C12.5 16.7348 12.3946 16.4804 12.2071 16.2929C12.0196 16.1054 11.7652 16 11.5 16ZM21.5 11H11.5C11.2348 11 10.9804 11.1054 10.7929 11.2929C10.6054 11.4804 10.5 11.7348 10.5 12C10.5 12.2652 10.6054 12.5196 10.7929 12.7071C10.9804 12.8946 11.2348 13 11.5 13H21.5C21.7652 13 22.0196 12.8946 22.2071 12.7071C22.3946 12.5196 22.5 12.2652 22.5 12C22.5 11.7348 22.3946 11.4804 22.2071 11.2929C22.0196 11.1054 21.7652 11 21.5 11ZM21.5 16H15.5C15.2348 16 14.9804 16.1054 14.7929 16.2929C14.6054 16.4804 14.5 16.7348 14.5 17C14.5 17.2652 14.6054 17.5196 14.7929 17.7071C14.9804 17.8946 15.2348 18 15.5 18H21.5C21.7652 18 22.0196 17.8946 22.2071 17.7071C22.3946 17.5196 22.5 17.2652 22.5 17C22.5 16.7348 22.3946 16.4804 22.2071 16.2929C22.0196 16.1054 21.7652 16 21.5 16Z"/>
                </SSearchIconPopup>
            </SSearchPopupButton>
            </SSearchFieldContainer>
            <SSearchDisclaimer $isShown={onlineStatus === 'offline' || onlineStatus === 'loading' ? true : false}>{disclaimerText[disclaimerType]}</SSearchDisclaimer>
        </SSearchWrapper>
    </SSearch>
    {isSortWindowActive ?  <SortPopup handelShowHideSortWindow={handelShowHideSortWindow} /> : ''}
    </>
    );
}

export default Search;