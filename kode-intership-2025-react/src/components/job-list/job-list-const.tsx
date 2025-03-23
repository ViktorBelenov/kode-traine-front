import { Department } from "../../types/person";


import { TFilter } from "../../types/person";

type Job = {
    active:boolean;
    title: string;
    titleEn: string;
}

const Filters: Record<TFilter, Job> = {
    all:{
        active:true,
        title: 'Все',
        titleEn: 'All'
    },
    [Department.DESIGN]:{
        active:true,
        title: 'Дизайн',
        titleEn: 'Design'
    },
    [Department.ANALYTICS]:{
        active:true,
        title: 'Аналитика',
        titleEn: 'Analytics'
    },
    [Department.MANAGEMENT]:{
        active:true,
        title: 'Менеджмент',
        titleEn: 'Managers'
    },
    [Department.IOS]:{
        active:true,
        title: 'iOS',
        titleEn: 'iOS'
    },
    [Department.ANDROID]:{
        active:true,
        title: 'Android',
        titleEn: 'Android'
    },
    [Department.QA]:{
        active:false,
        title: 'QA',
        titleEn: 'QA'
    },
    [Department.FRONTEND]:{
        active:false,
        title: 'frontend',
        titleEn: 'Frontend'
    },
    [Department.HR]:{
        active:false,
        title: 'HR',
        titleEn: 'HR'
    },
    [Department.BACK_OFFICE]:{
        active:false,
        title: 'Бэк-офис',
        titleEn: 'Back-office'
    },
    [Department.BACKEND]:{
        active:false,
        title: 'Backend',
        titleEn: 'Backend'
    },
    [Department.SUPPORT]:{
        active:false,
        title: 'Техподдержка',
        titleEn: 'Support'
    },
    [Department.PR]:{ 
        active: false,
        title: "PR",
        titleEn: 'PR'
    }
}

const CurrentFilters = Object.entries(Filters).filter(([, value]) => value.active);

export default CurrentFilters;