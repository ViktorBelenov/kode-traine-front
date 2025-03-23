type Type = 'loading' | 'notFound' | 'search';


type ErrorState = {
    title: string;
    promise: string;
    button?: string;
  };
  
  const ErrorStateRu : Record<Type, ErrorState> = {
  
      loading: {
          title:'Какой-то сверхразум все сломал',
          promise:'Постараемся быстро починить',
          button:'Попробовать снова'
      },
      notFound: {
          title:'Человека не найдено',
          promise:'Поищите в другом месте',
      },
      search: {
          title:'Мы никого не нашли',
          promise:'Попробуй скорректировать запрос',
        }
    };
  
    const ErrorStateEng: Record<Type, ErrorState> = {
      loading: {
          title: "Some superintelligence broke everything",
          promise: "We'll try to fix it quickly",
          button: "Try again"
      },
      notFound: {
          title: "Person not found",
          promise: "Try searching somewhere else",
      },
      search: {
          title: "We didn't find anyone",
          promise: "Try adjusting your query",
      }
  };

export const ErrorState = {
    rus:ErrorStateRu,
    eng:ErrorStateEng
}
  