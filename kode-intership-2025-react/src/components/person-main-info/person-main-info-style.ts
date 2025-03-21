import styled from "styled-components"

export const SPersonMainSection = styled.section`
  background-color: ${(props) => props.theme.backgroundInfo};
`

export const SPersonMainWrapper = styled.div`
    padding: 24px;
    margin: 0 auto;
    width: 100%;
  
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SPersonMainLinkBackContainer = styled.div`
    width: 100%;
    margin-bottom: 26px;
`

export const SPersonMainImg = styled.img`
  border-radius: 50%;
  height: 104px;
  
  margin-bottom: 24px;
`


export const SPersonMainName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  
  margin-bottom: 12px;
  color: ${(props) => props.theme.infoName};
`

export const SPersonMainTag = styled.span`
  font-weight: 400;
  font-size: 17px;
  color: #97979B;
`
export const SPersonMainJob = styled.span`
  font-size: 13px;
  font-weight: 400;
  color:#55555C;
`

  
export const SPersonMainSVG = styled.svg`
fill: ${(props) => props.theme.color};
`

// <section className="person__main-info">
//         <div className="person__main-info-wrapper">
//           <div className="person__main-info-link-back-container">
//             <Link to={ROUTES.HOME}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={16}
//                 height={18}
//                 viewBox="0 0 16 18"
//                 fill="none"
//               >
//                 <g filter="url(#filter0_d_45129_9068)">
//                   <path
//                     d="M5.17006 6.71005L9.41006 10.9501C9.50302 11.0438 9.61362 11.1182 9.73548 11.1689C9.85734 11.2197 9.98805 11.2458 10.1201 11.2458C10.2521 11.2458 10.3828 11.2197 10.5046 11.1689C10.6265 11.1182 10.7371 11.0438 10.8301 10.9501C11.0163 10.7627 11.1208 10.5092 11.1208 10.2451C11.1208 9.98087 11.0163 9.72741 10.8301 9.54005L7.29006 6.00005L10.8301 2.46005C11.0163 2.27269 11.1209 2.01924 11.1209 1.75505C11.1209 1.49086 11.0163 1.23741 10.8301 1.05005C10.7366 0.95737 10.6258 0.884045 10.504 0.83428C10.3821 0.784515 10.2517 0.759291 10.1201 0.760052C9.98845 0.759291 9.85799 0.784515 9.73615 0.83428C9.61431 0.884045 9.5035 0.95737 9.41006 1.05005L5.17006 5.29005C5.07633 5.38301 5.00194 5.49362 4.95117 5.61547C4.9004 5.73733 4.87426 5.86804 4.87426 6.00005C4.87426 6.13206 4.9004 6.26277 4.95117 6.38463C5.00194 6.50649 5.07633 6.61709 5.17006 6.71005Z"
//                     fill="#050510"
//                   />
//                 </g>
//                 <defs>
//                   <filter
//                     id="filter0_d_45129_9068"
//                     x="0.874268"
//                     y="0.76001"
//                     width="14.2466"
//                     height="18.4858"
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                   >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feColorMatrix
//                       in="SourceAlpha"
//                       type="matrix"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                       result="hardAlpha"
//                     />
//                     <feOffset dy={4} />
//                     <feGaussianBlur stdDeviation={2} />
//                     <feComposite in2="hardAlpha" operator="out" />
//                     <feColorMatrix
//                       type="matrix"
//                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
//                     />
//                     <feBlend
//                       mode="normal"
//                       in2="BackgroundImageFix"
//                       result="effect1_dropShadow_45129_9068"
//                     />
//                     <feBlend
//                       mode="normal"
//                       in="SourceGraphic"
//                       in2="effect1_dropShadow_45129_9068"
//                       result="shape"
//                     />
//                   </filter>
//                 </defs>
//               </svg>
//             </Link>
//           </div>
//           <img
//             className="person__main-info-photo"
//             src={person.avatarUrl}
//             alt="avatar"
//             width={104}
//             height={104}
//           />
//           <h1 className="person__main-info-name">
//             {`${person.firstName} ${person.lastName}`} <span className="person__main-info-name-tag">{`${person.department}`}</span>
//           </h1>
//           <span className="person__main-info-job">{`${person.position}`}</span>
//         </div>
//     </section>