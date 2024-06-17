import React from 'react';

export type Article = {
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
  categoryFilter: string;
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
        const BaseUrl = import.meta.env.NEWS_API_URL;
        console.log(BaseUrl)
        const apiKey = import.meta.env.NEWS_API_KEY;
        const url = `${BaseUrl}${categoryQuery}&apiKey=${apiKey}`;
        const response = await fetch(url);
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
  }, [categoryFilter]);

  if (articles.length === 0) return null;
  return (
    <NewsContext.Provider
      value={{ articles, setCategoryFilter, categoryFilter }}
    >
      {children}
    </NewsContext.Provider>
  );
};
