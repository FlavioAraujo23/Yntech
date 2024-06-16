import { useNews } from '../context/use-news-context';

const categories = [
  { value: 'business', label: 'Negócios', color: '#9F1515' },
  { value: 'entertainment', label: 'Entretenimento', color: '#BF9B1A' },
  { value: 'health', label: 'Saúde', color: '#820475' },
  { value: 'general', label: 'Geral', color: '#01EBFA' },
  { value: 'science', label: 'Ciência', color: '#0B07D2' },
  { value: 'sports', label: 'Esportes', color: '#0CC508' },
  { value: 'technology', label: 'Tecnologia', color: '#8F0479' },
];

const Filter = () => {
  const { setCategoryFilter } = useNews();

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
  };
  return (
    <nav className="flex w-full flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
    <div className="flex items-center space-x-2">
      <img src="/book-open.svg" alt="book" width={24} height={24} />
      <select
        id="category-select"
        className="text-[#ADADAD] w-40 outline-none p-0"
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option defaultValue={''} disabled selected className='font-bold'>
          Selecione um filtro:
        </option>
        {categories.map((category) => (
          <option
            key={category.value}
            value={category.value}
            style={{ color: category.color }}
          >
            {category.label}
          </option>
        ))}
      </select>
    </div>
    <div className="flex flex-wrap justify-center md:justify-start space-x-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => handleCategoryChange(category.value)}
          style={{ color: category.color }}
          className="border-r-[1px] border-[#ADADAD] px-5"
        >
          {category.label}
        </button>
      ))}
    </div>
  </nav>
  );
};

export default Filter;
