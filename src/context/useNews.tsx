import React from 'react';
import { NewsContextProps, NewsContext } from './use-news-context';

export const useNews = (): NewsContextProps => {
  const context = React.useContext(NewsContext);
  if (!context) {
    throw new Error('useNews precisa ser usado com um NewsProvider');
  }
  return context;
};
