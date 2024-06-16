import React from 'react';

type Article = [
  {
    source: {
      id: number | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
  }
];

type News = {
  status: string;
  totalResults: number;
  article: Article[];
};

type NewsContextProps = {
  articles: Article[] | undefined;
  filteredArticles: Article[];
  setCategoryFilter: (category: string) => void;
};

const NewsContext = React.createContext<NewsContextProps | undefined>(
  undefined
);
export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticle] = React.useState<Article[]>([]);
  const [categoryFilter, setCategoryFilter] = React.useState<string>('All');
  const [filteredArticles, setFilteredArticles] = React.useState<Article[]>([]);

  React.useEffect(() => {
    const fetchNews = async () => {
      const categoryQuery =
        categoryFilter !== 'All' ? `&category=${categoryFilter}` : '';
      const response = await fetch(
        `${import.meta.env.NEWS_API_UR}?country=br${categoryQuery}&apiKey=${
          import.meta.env.NEWS_API_KEY
        }`
      );
      const data: News = await response.json();

      if (categoryQuery !== '') {
        setFilteredArticles(data.article);
      }

      setArticle(data.article);
    };

    fetchNews();
  }, [categoryFilter]);

  return (
    <NewsContext.Provider
      value={{ articles, filteredArticles, setCategoryFilter }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = (): NewsContextProps => {
  const context = React.useContext(NewsContext);
  if (!context) {
    throw new Error('useNews precisa ser usado com um NewsProvider');
  }
  return context;
};
