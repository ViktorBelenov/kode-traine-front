import { JSX, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import ROUTES from "../const";
import { formatAge, formatDate } from "../utils";
import { fetchPeople } from "../store/peopleSlice";
import ErrorEmptySearch from "../components/error-empty-search/error-empty-search";
import Error from "../components/error/error";

function PeopleInfo():JSX.Element {

    const id = useParams().id;
    
    const dispatch = useAppDispatch();
    const people = useAppSelector((state) => state.people.people);
    const status = useAppSelector((state) => state.people.status);
    
    const currentPerson = people.find((person)=> person.id === id);

    useEffect(() => {
        if (!people.length) {
          dispatch(fetchPeople('all'));
        }
      }, [dispatch, people.length]);



    if(status === 'idle' || status==='loading') {
        return(
            <h1>Loading</h1>
        )
    }

    if(status=== 'failed') {
        return(
            <ul>
                <Error />
            </ul>
        )
    }

    if(!currentPerson) {
        return(
        <ul>
            <ErrorEmptySearch />
        </ul>
        )
    }
    
    return(
        <>
  <section className="person__main-info">
    <div className="person__main-info-wrapper">
      <div className="person__main-info-link-back-container">
        <Link to={ROUTES.HOME}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={18}
            viewBox="0 0 16 18"
            fill="none"
          >
            <g filter="url(#filter0_d_45129_9068)">
              <path
                d="M5.17006 6.71005L9.41006 10.9501C9.50302 11.0438 9.61362 11.1182 9.73548 11.1689C9.85734 11.2197 9.98805 11.2458 10.1201 11.2458C10.2521 11.2458 10.3828 11.2197 10.5046 11.1689C10.6265 11.1182 10.7371 11.0438 10.8301 10.9501C11.0163 10.7627 11.1208 10.5092 11.1208 10.2451C11.1208 9.98087 11.0163 9.72741 10.8301 9.54005L7.29006 6.00005L10.8301 2.46005C11.0163 2.27269 11.1209 2.01924 11.1209 1.75505C11.1209 1.49086 11.0163 1.23741 10.8301 1.05005C10.7366 0.95737 10.6258 0.884045 10.504 0.83428C10.3821 0.784515 10.2517 0.759291 10.1201 0.760052C9.98845 0.759291 9.85799 0.784515 9.73615 0.83428C9.61431 0.884045 9.5035 0.95737 9.41006 1.05005L5.17006 5.29005C5.07633 5.38301 5.00194 5.49362 4.95117 5.61547C4.9004 5.73733 4.87426 5.86804 4.87426 6.00005C4.87426 6.13206 4.9004 6.26277 4.95117 6.38463C5.00194 6.50649 5.07633 6.61709 5.17006 6.71005Z"
                fill="#050510"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_45129_9068"
                x="0.874268"
                y="0.76001"
                width="14.2466"
                height="18.4858"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_45129_9068"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_45129_9068"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Link>
      </div>
      <img
        className="person__main-info-photo"
        src="./img/cat.jpg"
        alt="avatar"
        width={104}
        height={104}
      />
      <h1 className="person__main-info-name">
        {`${currentPerson.firstName} ${currentPerson.lastName}`} <span className="person__main-info-name-tag">{`${currentPerson.department}`}</span>
      </h1>
      <span className="person__main-info-job">{`${currentPerson.position}`}</span>
    </div>
  </section>
  <section className="person__second-info">
    <div className="person__second-info-wrapper">
      <div className="person__second-info-birthday">
        <div className="person__second-info-birthday-favorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M20 7.67002C19.9368 7.48711 19.822 7.32645 19.6693 7.20753C19.5167 7.0886 19.3328 7.01652 19.14 7.00002L13.45 6.17002L10.9 1.00002C10.8181 0.830952 10.6902 0.688365 10.5311 0.588597C10.3719 0.488828 10.1878 0.435913 9.99998 0.435913C9.81212 0.435913 9.62806 0.488828 9.46889 0.588597C9.30971 0.688365 9.18186 0.830952 9.09998 1.00002L6.54998 6.16002L0.859977 7.00002C0.6749 7.02633 0.500902 7.10399 0.357728 7.22418C0.214554 7.34438 0.107937 7.5023 0.0499774 7.68002C-0.00307759 7.8537 -0.00783865 8.03854 0.0362052 8.21472C0.080249 8.39089 0.171435 8.55175 0.299977 8.68002L4.42998 12.68L3.42998 18.36C3.3896 18.5484 3.40453 18.7445 3.47296 18.9247C3.54139 19.1048 3.66041 19.2613 3.81571 19.3754C3.971 19.4895 4.15595 19.5563 4.34831 19.5678C4.54066 19.5792 4.73224 19.5349 4.89998 19.44L9.99998 16.77L15.1 19.44C15.2403 19.5192 15.3988 19.5606 15.56 19.56C15.7718 19.5608 15.9784 19.4942 16.15 19.37C16.3051 19.2589 16.4252 19.1057 16.4961 18.9285C16.567 18.7513 16.5857 18.5575 16.55 18.37L15.55 12.69L19.68 8.69002C19.8244 8.5677 19.9311 8.40693 19.9877 8.22637C20.0444 8.04582 20.0486 7.8529 20 7.67002ZM13.85 11.67C13.7342 11.7824 13.6474 11.9212 13.5969 12.0744C13.5464 12.2276 13.5337 12.3908 13.56 12.55L14.28 16.75L10.52 14.75C10.3738 14.6777 10.213 14.6401 10.05 14.6401C9.88694 14.6401 9.72611 14.6777 9.57998 14.75L5.81998 16.75L6.53998 12.55C6.56622 12.3908 6.55354 12.2276 6.50305 12.0744C6.45255 11.9212 6.36572 11.7824 6.24998 11.67L3.24998 8.67002L7.45998 8.06002C7.62198 8.03749 7.77598 7.97556 7.90848 7.87967C8.04098 7.78379 8.14794 7.65686 8.21998 7.51002L9.99998 3.70002L11.88 7.52002C11.952 7.66686 12.059 7.79379 12.1915 7.88968C12.324 7.98556 12.478 8.04749 12.64 8.07002L16.85 8.68002L13.85 11.67Z"
              fill="#050510"
            />
          </svg>
          <span>{formatDate(currentPerson.birthday)}</span>
        </div>
        <span className="person__second-info-birthday-total-year">{formatAge(currentPerson.birthday)}</span>
      </div>
      <div className="person__second-info-telephone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M18.44 11C18.22 11 17.99 10.93 17.77 10.88C17.3245 10.7818 16.8866 10.6515 16.46 10.49C15.9961 10.3212 15.4861 10.33 15.0283 10.5146C14.5704 10.6992 14.1971 11.0466 13.98 11.49L13.76 11.94C12.786 11.3982 11.891 10.7252 11.1 9.93999C10.3147 9.14901 9.6418 8.25399 9.09998 7.27999L9.51998 6.99999C9.96334 6.78291 10.3108 6.40952 10.4954 5.95168C10.68 5.49384 10.6888 4.9839 10.52 4.51999C10.3612 4.09241 10.2309 3.65479 10.13 3.20999C10.08 2.98999 10.04 2.75999 10.01 2.52999C9.88854 1.82561 9.5196 1.18773 8.9696 0.731229C8.4196 0.274727 7.72467 0.029599 7.00998 0.0399902L4.00998 0.0399902C3.57901 0.0359436 3.15223 0.124804 2.75869 0.300521C2.36515 0.476238 2.01409 0.734686 1.72941 1.05827C1.44473 1.38186 1.23311 1.76298 1.10897 2.1757C0.98482 2.58842 0.951058 3.02305 1.00998 3.44999C1.54272 7.63937 3.45601 11.5319 6.44763 14.5126C9.43925 17.4934 13.3387 19.3925 17.53 19.91H17.91C18.6474 19.9111 19.3594 19.6405 19.91 19.15C20.2263 18.867 20.4791 18.5202 20.6514 18.1323C20.8238 17.7444 20.9119 17.3244 20.91 16.9V13.9C20.8977 13.2054 20.6448 12.5365 20.1943 12.0077C19.7439 11.4788 19.1238 11.1226 18.44 11ZM18.94 17C18.9398 17.142 18.9094 17.2823 18.8508 17.4116C18.7921 17.5409 18.7066 17.6563 18.6 17.75C18.4882 17.8465 18.3576 17.9185 18.2164 17.9616C18.0752 18.0046 17.9265 18.0177 17.78 18C14.0349 17.5198 10.5562 15.8065 7.89269 13.1303C5.22917 10.4541 3.53239 6.96733 3.06998 3.21999C3.05406 3.07351 3.06801 2.92532 3.11098 2.78438C3.15395 2.64344 3.22505 2.51268 3.31998 2.39999C3.41369 2.29332 3.52904 2.20783 3.65836 2.14921C3.78767 2.09058 3.92799 2.06017 4.06998 2.05999L7.06998 2.05999C7.30253 2.05482 7.5296 2.13087 7.71212 2.27506C7.89464 2.41925 8.02119 2.62256 8.06998 2.84999C8.10998 3.12332 8.15998 3.39332 8.21998 3.65999C8.3355 4.18713 8.48924 4.70517 8.67998 5.20999L7.27998 5.85999C7.16028 5.91491 7.0526 5.99294 6.96314 6.08959C6.87367 6.18623 6.80418 6.2996 6.75865 6.42318C6.71312 6.54677 6.69245 6.67812 6.69783 6.80971C6.7032 6.9413 6.73452 7.07054 6.78998 7.18999C8.22918 10.2727 10.7072 12.7508 13.79 14.19C14.0334 14.29 14.3065 14.29 14.55 14.19C14.6747 14.1454 14.7893 14.0764 14.8871 13.9872C14.985 13.8979 15.0641 13.7901 15.12 13.67L15.74 12.27C16.2569 12.4549 16.7846 12.6085 17.32 12.73C17.5866 12.79 17.8566 12.84 18.13 12.88C18.3574 12.9288 18.5607 13.0553 18.7049 13.2378C18.8491 13.4204 18.9252 13.6474 18.92 13.88L18.94 17Z"
            fill="#050510"
          />
        </svg>
        <span>{currentPerson.phone}</span>
      </div>
    </div>
  </section>
</>

    )
}

export default PeopleInfo;
