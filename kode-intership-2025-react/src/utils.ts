import { TLanguage } from "./types/utils";

const MONTHS_SHORT_RU = [
    "янв", "фев", "мар", "апр", "май", "июн", 
    "июл", "авг", "сен", "окт", "ноя", "дек"
  ];

  const MONTHS_SHORT_ENG = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];


  const MONTHS_FULL_RU = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];

  const MONTHS_FULL_ENG = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export function getHumanDate(date:string, language: TLanguage):string {
    const objDate = new Date(date);
    const month = objDate.getMonth();
    const day = objDate.getDate();
    if(language === 'rus') {
      return `${day} ${MONTHS_SHORT_RU[month]}`
    }

    return `${day} ${MONTHS_SHORT_ENG[month]}`;
  }

  



  export const formatDate = (dateString: string, language:string): string => {
    const months = language === 'rus' ? MONTHS_FULL_RU : MONTHS_FULL_ENG ;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
};

export const getAge = (dateString: string): number => {
    const birthDate = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const isBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
    if (!isBirthdayPassed) {
      age -= 1;
    }
  
    return age;
};



export const formatAge = (dateString: string, language:string): string => { 
  const age = getAge(dateString);
  if(language === 'rus') {
    if (age % 10 === 1) return `${age} год`;
    if ([2, 3, 4].includes(age % 10)) return `${age} годa`;
    return `${age} лет`;
  }

  return `${age} years old`

};