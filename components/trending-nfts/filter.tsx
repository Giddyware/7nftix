interface FilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterCategories = [
  "All Categories",
  "Art",
  "3D Art",
  "Gaming",
  "Painting",
  "Music",
  "Others",
];

export default function Filter({ activeFilter, onFilterChange }: FilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
      {filterCategories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`relative rounded-full transition-all duration-300
            ${
              category === "All Categories"
                ? "min-w-[120px] sm:min-w-[135px] md:min-w-[150px]"
                : "min-w-[80px] sm:min-w-[90px] md:min-w-[100px]"
            } h-[32px] sm:h-[36px] md:h-[40px]`}
        >
          {activeFilter === category ? (
            <>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0087DD] to-[#0426E5]" />
              <span
                className="absolute inset-[1px] rounded-full flex items-center justify-center text-white whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-base"
                style={{
                  background:
                    "linear-gradient(93.36deg, #002034 -24.85%, #00041C 78.18%)",
                }}
              >
                {category}
              </span>
            </>
          ) : (
            <span className="absolute inset-0 rounded-full border-[0.5px] border-solid border-gray-600 hover:border-gray-400 flex items-center justify-center text-white whitespace-nowrap px-2 sm:px-3 md:px-4 text-sm sm:text-base">
              {category}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
