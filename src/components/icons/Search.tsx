const Search = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7894 19C16.2077 19 19.7894 15.4183 19.7894 11C19.7894 6.58172 16.2077 3 11.7894 3C7.37115 3 3.78943 6.58172 3.78943 11C3.78943 15.4183 7.37115 19 11.7894 19Z"
        stroke={isMobile ? '#fff' : '#652991'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7894 21L17.4394 16.65"
        stroke={isMobile ? '#fff' : '#652991'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Search;
