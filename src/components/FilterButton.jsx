const FilterButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white"
    >
      {children}
    </button>
  );
};

export default FilterButton;
