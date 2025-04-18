import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`




* {
margin: 0;
padding: 0;
box-sizing: border-box;
}


html {
scroll-behavior: smooth;
height:100%;
}

body {
font-family: Inter, sans-serif; 
font-size: 16px;
color: #333;
background-color: #fff;
height:100%;
}

body {
    background-color: ${(props) => props.theme.background};
}

h1, h2, h3, h4, h5, h6 {
font-weight: normal;
}


a {
text-decoration: none;
color: inherit;
transition: color 0.3s ease-in-out;
}




button {
border: none;
background: none;
cursor: pointer;
}



ul, ol {
list-style: none;
}


img {
max-width: 100%;
height: auto;
display: block;
}


.search {
margin-top: 8px;
}

.search__wrapper{
padding: 0 16px;
margin: 0 auto;
width: 100%;

display: flex;
flex-direction: column;
gap: 6px;
}

.search__title {
font-size: 28px;
font-weight: 700;
line-height: 28px;

margin-left: 8px;
}

.search__field {
display: flex;
}


.search-input {
background-color: #F7F7F8;
color:#000;

width:100%;
border-radius: 16px;
padding:12px 44px;

font-size: 18px;
font-weight: 500;

border:none;
caret-color: #6534FF;
}

.search-input::placeholder {
color:#C3C3C6;

font-size: 18px;
font-weight: 500;

position: relative;
top: 3px;
}

.search__field {
position: relative;
}

.search__button {
position: absolute;
top: 10px;
}

.search__button-search {
left:10px;
}
.search__button-list {
right:10px;
}

.employee-list__wrapper {
padding: 0 16px;
margin: 0 auto;
width: 100%;
}

.employee-list__job-list {
display: flex;
flex-direction: column;
justify-content: flex-start;

padding: 0 16px;
margin: 0 auto;
width: 100%;

border-bottom: 1px solid #C3C3C6;
}

@media (min-width:700px) {
.employee-list__job-list{
    flex-direction: row;
}
}

.employee-list__list{
display: flex;
flex-direction: column;
gap: 12px;
}

.employee-list__job-item {
font-weight: 600;
font-size: 15px;

padding: 8px 12px;

}

.employee-list__job-item--active {
border-bottom: 2px solid #6534FF;
}

.employee-list__wrapper {
margin-top: 22px;
}

.employee-list__card {
display: flex;
gap: 16px;
align-items: center;
}

.employee-list__card-img {
width: 72px;
height: 72px;

border-radius: 50%;
}

.employee-list__card-name {
font-size: 16px;
font-weight: 500;
}

.employee-list__card-name-job {
font-size: 14px;
font-weight: 500;
color:#97979B;
}

.employee-list__card-job-title {
color: #55555C;
font-size: 13px;
font-weight: 400;
}

.modal-container {
position: fixed;
top: 0;
left: 0;
display: flex;
width: 100%;
height: 100%;
background-color: rgba(45, 52, 64, 0.3);
}



.modal{
  position: relative;
  margin: auto;
  padding: 24px 16px;
  background-color: #ffffff;
  border-radius: 20px;
}
.modal-sort{
width:373px;
box-sizing: border-box;
}


.modal-close-button {
position: absolute;
padding: 0;
top: 24px;
right: 32px;
width: 24px;
height: 24px;

border: none;
cursor: pointer;
}
.modal-title{
font-family: Inter, sans-serif;
font-weight: 600;
font-size: 20px;
color: #050510;
text-align: center;
margin-bottom: 20px;
}

.modal-sort-list {
display: flex;
flex-direction: column;
gap:40px;

}

.visually-hidden {
position: absolute;
width: 1px;
height: 1px;
margin: -1px;
padding: 0;
border: 0;
clip: rect(0 0 0 0);
overflow: hidden;
}


.radio {
display: flex;
align-items: center;
}

.radio:hover .radio__control-mark {
border: 2px solid #6534FF;
}

.radio__description {
font-weight: 500;
font-size: 16px;
color: #000;
max-width: 800px;
}

.radio__control-mark {
position: relative;
box-sizing: border-box;
width: 20px;
height: 20px;
border-radius: 50%;
border: 2px solid #6534FF;
margin-right: 14px;

}

.radio__input:checked + .radio__control-mark::before {
content: "";
position: absolute;
width: 43.57%;
height: 43.57%;
background-color: #fff;
border-radius: 50%;

top: 29%;
left: 29%;
}

.radio__input:checked + .radio__control-mark {
background-color: #6534FF;
}


.employee-list__card-birthdate {
margin-left: auto;
}

.employee-list__card-birthdate-text {
font-size: 15px;
font-weight: 400;
color:#55555C;
}

.divider {
display: flex;
justify-content: center;
align-items: center;
padding:0 15px;
}

.divider-line {
flex-grow: 1;

height: 1px;
background-color: #C3C3C6;
}

.divider-text {
margin: 0 15px;
font-size: 15px;
font-weight: 500;
color: #C3C3C6;
}


.employee-error {
margin-top: 133px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap:12px;
}

.employee-error__title {
font-size: 17px;
font-weight: 600;
}
.employee-error__promise {
font-size: 16px;
font-weight: 400;
color: #97979B;
}
.employee-error__button {
font-size: 16px;
font-weight: 600;
color:#6534FF;
}

.search__form {
width:100%;
}

.loading {
background-color: #FAFAFA;
}

.loading-name {
width: 144px;
height: 16px;
border-radius: 50px;
margin-bottom: 10px;

}

.loading-job{
width: 80px;
height: 12px;
border-radius: 50px;

}

.person__main-info {
background-color: #F7F7F8;
}

.person__main-info-wrapper{
padding: 24px;
margin: 0 auto;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
}

.person__main-info-photo {
border-radius: 50%;
height: 104px;

margin-bottom: 24px;
}

.person__main-info-link-back-container {
width: 100%;
margin-bottom: 26px;
}

.person__main-info-name {
font-size: 24px;
font-weight: 700;

margin-bottom: 12px;
color:#050510;
}

.person__main-info-name-tag {
font-weight: 400;
font-size: 17px;
color: #97979B;
}

.person__main-info-job{
font-size: 13px;
font-weight: 400;
color:#55555C;
}

.person__second-info-wrapper{
padding: 26px 16px;
margin: 0 auto;
width: 100%;

display: flex;
flex-direction: column;
align-items: center;
}

.person__second-info-birthday {
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
padding-bottom: 26px;
border-bottom: 1px solid #F7F7F8;
margin-bottom: 23px;
}

.person__second-info-birthday-favorite {
display: flex;
justify-content: space-between;
align-items: center;

gap:14px;
}

.person__second-info-telephone {
margin-right: auto;

display: flex;
align-items: center;

gap:14px;
}
`