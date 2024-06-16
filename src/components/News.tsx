import { useNews } from '../context/useNews';
import { formatDate } from '../utils/format-date';

const News = () => {
  const { articles } = useNews();
  return (
    <main className="container mt-28">
      <section className="w-full flex flex-col justify-center items-center p-4">
        <h2 className='hidden md:block font-bold text-xl text-black'>Mais lidas da semana</h2>
        {articles.map((article, index) => (
          <div
            className="md:w-[1050px] w-full p-9 flex flex-col md:flex-row  shadow-xl"
            key={article.publishedAt}
          >
            <div className="flex flex-col-reverse md:flex-col md:justify-between md:p-8 md:mb-0 mb-6 md:w-[470px] md:mr-7 ">
              <h3 className="font-bold text-black md:text-3xl text-xl">
                {article.title}
              </h3>
              <div className="flex justify-between text-sm text-[#ADADAD]">
                <p>{formatDate(article.publishedAt)}</p>
                <p>{index + 2}min de leitura</p>
              </div>
            </div>
            <img
              className="w-[500px] h-[300px] object-cover"
              src={article.urlToImage}
              alt={article.source.name}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default News;
