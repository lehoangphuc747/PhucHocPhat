import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  const totalChantLines = article.chantLines?.length || 0;
  const linesPerColumn = Math.ceil(totalChantLines / 3);

  const column1 = article.chantLines?.slice(0, linesPerColumn) || [];
  const column2 = article.chantLines?.slice(linesPerColumn, 2 * linesPerColumn) || [];
  const column3 = article.chantLines?.slice(2 * linesPerColumn, 3 * linesPerColumn) || [];

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
      {article.videoUrl && (
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
      )}

      {article.content && (
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}

      {totalChantLines > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
            PHẦN 2: CHÁNH KINH (TRÌ TỤNG CHÚ ĐẠI BI)
          </h2>
          <p className="italic text-gray-600 dark:text-gray-400 mb-4 text-center">
            (Đọc 1, 3, 5 biến hoặc nhiều hơn tùy theo thời gian và tâm nguyện)
          </p>
          <div className="overflow-x-auto">
            <Table className="w-full table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 text-left text-gray-700 dark:text-gray-300"></TableHead>
                  <TableHead className="w-1/3 text-left text-gray-700 dark:text-gray-300"></TableHead>
                  <TableHead className="w-1/3 text-left text-gray-700 dark:text-gray-300"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: linesPerColumn }).map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell className="align-top py-1 px-2 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                      {column1[rowIndex] || ""}
                    </TableCell>
                    <TableCell className="align-top py-1 px-2 text-sm text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                      {column2[rowIndex] || ""}
                    </TableCell>
                    <TableCell className="align-top py-1 px-2 text-sm text-gray-700 dark:text-gray-300">
                      {column3[rowIndex] || ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;