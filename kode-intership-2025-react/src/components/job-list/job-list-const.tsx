import { Department } from "../../types/person";


import { TFilter } from "../../types/person";

type Job = {
    active:boolean;
    title: string;
}

const Filters: Record<TFilter, Job> = {
    all:{
        active:true,
        title: 'Все'
    },
    [Department.DESIGN]:{
        active:true,
        title: 'Designers'
    },
    [Department.ANALYTICS]:{
        active:true,
        title: 'Analysts'
    },
    [Department.MANAGEMENT]:{
        active:true,
        title: 'Managers'
    },
    [Department.IOS]:{
        active:true,
        title: 'iOS'
    },
    [Department.ANDROID]:{
        active:true,
        title: 'Android'
    },
    [Department.QA]:{
        active:false,
        title: 'qa'
    },
    [Department.FRONTEND]:{
        active:false,
        title: 'frontend'
    },
    [Department.HR]:{
        active:false,
        title: 'hr'
    },
    [Department.BACK_OFFICE]:{
        active:false,
        title: 'back_office'
    },
    [Department.BACKEND]:{
        active:false,
        title: 'backend'
    },
    [Department.SUPPORT]:{
        active:false,
        title: 'support'
    },
    [Department.PR]:{ 
        active: false,
        title: "PR" 
    }
}

const CurrentFilters = Object.entries(Filters).filter(([, value]) => value.active);

export default CurrentFilters;