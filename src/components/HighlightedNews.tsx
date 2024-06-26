import { useNavigate } from 'react-router-dom';
import { useNews } from '../context/useNews';
import { formatDate } from '../utils/format-date';
import { Article } from '../context/use-news-context';

const HighlightedNews = () => {
  const { articles, categoryFilter } = useNews();
  const navigate = useNavigate();
  const handleNewsClick = (article: Article) => {
    navigate('/news', { state: { article } });
  };
  if (!articles) return null;

  return (
    <div className="hidden md:flex md:justify-center md:w-[1048px] md:h-[400px] md:mx-auto md:mt-8">
      <div className="w-2/3">
        <div className="relative">
          {articles[0].urlToImage && (
            <img
              src={articles[0].urlToImage}
              alt={articles[0].title}
              className="w-[630px] h-[400px] object-cover cursor-pointer"
              onClick={() => handleNewsClick(articles[0])}
            />
          )}
          <div
            className="absolute bottom-0 left-0 p-4 w-full rounded-lg"
            style={{
              background:
                'linear-gradient(360deg, #030303 -10.26%, rgba(62, 62, 62, 0) 83.71%',
            }}
          >
            <span className="text-[#01EBFA] font-normal text-base font-montserrat">
              {categoryFilter ? categoryFilter : 'Geral'}
            </span>
            <h2 className="text-white text-3xl font-bold mt-2 font-montserrat">
              {articles[0].title}
            </h2>
            <div className=" flex justify-between items-center mt-1">
              <div className="flex">
                <img src="./eye.svg" alt="eye icon" />
                <p className="text-white font-medium text-sm font-montserrat">
                  3000
                </p>
              </div>
              <p className="text-white font-montserrat font-medium">Hoje</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 ml-10 h-full flex flex-col justify-between">
        {articles.slice(1, 5).map((article, index) => (
          <div
            key={index}
            className="flex pb-[10px] border-b-2 border-b-[#D7D7D7] cursor-pointer"
            onClick={() => handleNewsClick(article)}
          >
            {!!article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-[130px] h-20 object-cover"
              />
            )}
            <div className="w-2/3 pl-[10px]">
              <div className="flex justify-between items-center">
                <p className="text-[#ADADAD] text-xs font-montserrat font-normal">
                  {formatDate(article.publishedAt)}
                </p>
                <p className="text-[#ADADAD] text-xs font-montserrat font-normal">
                  {index + 1 * 2}min leitura
                </p>
              </div>

              <h3 className="text-black font-bold text-xs font-montserrat">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedNews;
