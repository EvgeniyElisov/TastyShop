import { cn } from "lib/utils";

type Props = {
  className?: string;
};

const categories = ["Пиццы", "Комбо", "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты"];
const activeCategoryIndex = 0;

export const Categories = ({ className }: Props) => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
      {categories.map((category, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeCategoryIndex === index && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={category}
        >
          <button>{category}</button>
        </a>
      ))}
    </div>
  );
};
