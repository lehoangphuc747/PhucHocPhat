import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold my-6 text-gray-800 dark:text-gray-200">
          Bài viết không tìm thấy
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Rất tiếc, bài viết bạn đang tìm không tồn tại.
        </p>
        <Button asChild>
          <Link to="/library">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Thư viện
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link to="/library">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Thư viện
          </Link>
        </Button>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        {article.title}
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="w-full h-full"
            src={article.videoUrl}
            title={article.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </div>

      {article.content && (
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}
    </div>
  );
};

export default ArticleDetail;