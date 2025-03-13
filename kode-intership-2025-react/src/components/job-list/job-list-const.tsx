import { Department } from "../../types/person";

type Filter = Department | 'Все';

type Job = {
    active:boolean;
    title: string;
}

const Filters: Record<Filter, Job> = {
    Все:{
        active:true,
        title: 'Все'
    },
    design:{
        active:true,
        title: 'Designers'
    },
    analytics:{
        active:true,
        title: 'Analysts'
    },
    management:{
        active:true,
        title: 'Managers'
    },
    ios:{
        active:true,
        title: 'iOS'
    },
    android:{
        active:true,
        title: 'Android'
    },
    qa:{
        active:false,
        title: 'qa'
    },
    frontend:{
        active:false,
        title: 'frontend'
    },
    hr:{
        active:false,
        title: 'hr'
    },
    back_office:{
        active:false,
        title: 'back_office'
    },
    backend:{
        active:false,
        title: 'backend'
    },
    support:{
        active:false,
        title: 'support'
    },
    pr:{ 
        active: false,
        title: "PR" 
    }
}

const CurrentFilters = Object.entries(Filters).filter(([, value]) => value.active);

export default CurrentFilters;