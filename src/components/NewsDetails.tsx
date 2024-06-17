import { useLocation } from 'react-router-dom';
import { Article } from '../context/use-news-context';

const NewsDetail = () => {
  const location = useLocation();
  const { article }: { article: Article } = location.state || {};

  if (!article) {
    return <div>A noticia não foi encontraa</div>;
  }

  return (
    <div className="max-w-sm md:max-w-3xl mx-auto md:mt-14">
      <h2 className="md:text-2xl font-bold text-xl font-montserrat">
        {article.title}
      </h2>
      <p className="md:text-lg md:my-6 my-3 text-[9px] font-medium text-[#ADADAD] font-montserrat">
        {article.description}
      </p>
      <p className="font-bold md:text-base text-[9px] font-montserrat">
        Por {article.author}
      </p>
      <p className="font-medium md:text-base text-[9px] text-[#ADADAD] pb-3 md:pb-6 border-b-2 border-b-[#D7D7D7] font-montserrat">
        {new Date(article.publishedAt).toLocaleDateString()} Atualizado há 15
        horas
      </p>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full object-cover h-80 mt-6"
      />
      <p className="font-medium md:text-lg text-[9px] mt-11 font-montserrat">
        {article.content}
      </p>
    </div>
  );
};

export default NewsDetail;
