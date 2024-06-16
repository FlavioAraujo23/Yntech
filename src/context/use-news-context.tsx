import React from 'react';

type Article = {
  source: {
    id: number | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type News = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type NewsContextProps = {
  articles: Article[];
  setCategoryFilter: (category: string) => void;
};

export const NewsContext = React.createContext<NewsContextProps | undefined>(
  undefined
);
export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [categoryFilter, setCategoryFilter] = React.useState<string>('All');

  React.useEffect(() => {
    const fetchNews = async () => {
      const categoryQuery =
        categoryFilter !== 'All' ? `&category=${categoryFilter}` : '';
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us${categoryQuery}&apiKey=`
        );
        const data: News = await response.json();
        if (data.status === 'ok') {
          const filteredArticles = data.articles.filter(
            (article) => article.urlToImage !== null
          );

          setArticles(filteredArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  if (articles.length === 0) return null;
  return (
    <NewsContext.Provider value={{ articles, setCategoryFilter }}>
      {children}
    </NewsContext.Provider>
  );
};
