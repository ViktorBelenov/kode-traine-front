const Month = [
    "янв", "фев", "мар", "апр", "май", "июн", 
    "июл", "авг", "сен", "окт", "ноя", "дек"
  ];


export function getHumanDate(date:string):string {
    const objDate = new Date(date);
    const month = objDate.getMonth();
    const day = objDate.getDate();

    return `${day} ${Month[month]}`;
  }

  



  export const formatDate = (dateString: string): string => {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
  
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



export const formatAge = (dateString: string): string => { 
    const age = getAge(dateString);
    if (age % 10 === 1) return `${age} год`;
    if ([2, 3, 4].includes(age % 10)) return `${age} годa`;
    return `${age} лет`;
};