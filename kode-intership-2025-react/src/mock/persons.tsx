import { Person } from "../types/person";
import { Department } from "../types/person";

const Persons:Person[] = [{
    id: "497f6eca-6276-4993-bfeb-53qweca",
    avatarUrl: "https://api.lorem.space/image/face?w=120&h=120",
    firstName: "John",
    lastName: "Doe",
    userTag: "jd",
    department: Department.IOS,
    position: "developer",
    birthday: "1913-01-24",
    phone: "+79001234567"
  },
  {
    id: "497f6eca-6276-49uhkhukeca",
    avatarUrl: "https://api.lorem.space/image/face?w=120&h=120",
    firstName: "Johnkkk",
    lastName: "Doe",
    userTag: "jd",
    department: Department.BACKEND,
    position: "developer",
    birthday: "1933-01-24",
    phone: "+79001234567"
  },
  {
    id: "497f6eca-6276-4993-bfebkhukca",
    avatarUrl: "https://api.lorem.space/image/face?w=120&h=120",
    firstName: "John",
    lastName: "Doettt",
    userTag: "jdrr",
    department: Department.FRONTEND,
    position: "developer",
    birthday: "1923-01-24",
    phone: "+790045434567"
  } 
]

  export default Persons;