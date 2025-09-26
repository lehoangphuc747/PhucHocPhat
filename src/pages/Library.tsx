import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
// Không cần import Separator nữa vì bố cục lưới sẽ cung cấp khoảng cách

const Library = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold my-6 text-center text-gray-800 dark:text-gray-200">
        Thư viện
      </h1>
      <div className="grid gap-2"> {/* Đã loại bỏ md:grid-cols-2 và lg:grid-cols-3 */}
        {articles.map((article) => (
          <Link
            to={`/library/${article.id}`}
            key={article.id}
            className="block text-center p-2 
                       hover:text-blue-600 dark:hover:text-blue-400 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       hover:scale-[1.02] transition-all duration-200 ease-in-out
                       border-b border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {article.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;