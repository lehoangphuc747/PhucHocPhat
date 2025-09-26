import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { Separator } from "@/components/ui/separator"; // Import Separator component

const Library = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold my-6 text-center text-gray-800 dark:text-gray-200">
        Thư viện
      </h1>
      <div className="flex flex-col gap-4"> {/* Use flex-col and gap for spacing */}
        {articles.map((article, index) => (
          <div key={article.id}>
            <Link to={`/library/${article.id}`} className="block text-center p-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {article.title}
              </h2>
            </Link>
            {index < articles.length - 1 && ( // Add separator after each item except the last one
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;