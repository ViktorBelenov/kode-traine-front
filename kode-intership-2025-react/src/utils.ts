const Month = [
    "янв", "фев", "мар", "апр", "май", "июн", 
    "июл", "авг", "сен", "окт", "ноя", "дек"
  ];


function getHumanDate(date:string):string {
    const objDate = new Date(date);
    const month = objDate.getMonth();
    const day = objDate.getDate();

    return `${day} ${Month[month]}`;
  }

  export default getHumanDate;