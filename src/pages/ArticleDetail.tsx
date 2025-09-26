import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articles, ArticleMetadata } from "@/data/articles";
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

interface ArticleContent {
  videoUrl?: string;
  content?: string;
  chantLines?: string[];
  part1Content?: string;
  part3Content?: string;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [articleMetadata, setArticleMetadata] = useState<ArticleMetadata | undefined>(undefined);
  const [articleContent, setArticleContent] = useState<ArticleContent | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      const metadata = articles.find((a) => a.id === id);
      setArticleMetadata(metadata);

      if (!metadata) {
        setError("Bài viết không tìm thấy");
        setLoading(false);
        return;
      }

      try {
        // Dynamically import the content based on the id
        const module = await import(`../posts/${id}.ts`);
        setArticleContent(module); // module will contain exported content, videoUrl, etc.
      } catch (err) {
        console.error("Failed to load article content:", err);
        setError("Không thể tải nội dung bài viết.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="flex-grow flex items-center justify-center p-4 text-center">Đang tải...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold my-6 text-gray-800 dark:text-gray-200">Lỗi</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{error}</p>
        <Button asChild>
          <Link to="/library">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Thư viện
          </Link>
        </Button>
      </div>
    );
  }

  if (!articleMetadata || !articleContent) {
    // This case should ideally be caught by the error state, but as a fallback
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

  const { title } = articleMetadata;
  const { videoUrl, content, chantLines, part1Content, part3Content } = articleContent;

  const totalChantLines = chantLines?.length || 0;
  const linesPerColumn = Math.ceil(totalChantLines / 3);

  const column1 = chantLines?.slice(0, linesPerColumn) || [];
  const column2 = chantLines?.slice(linesPerColumn, 2 * linesPerColumn) || [];
  const column3 = chantLines?.slice(2 * linesPerColumn, 3 * linesPerColumn) || [];

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
        {title}
      </h1>
      {videoUrl && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
          <AspectRatio ratio={16 / 9}>
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </div>
      )}

      {/* Hiển thị Phần 1 */}
      {part1Content && (
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: part1Content }}
        />
      )}

      {/* Hiển thị Phần 2 (bảng chú) */}
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
                  {/* Đã loại bỏ các TableHead trống */}
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

      {/* Hiển thị Phần 3 */}
      {part3Content && (
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mt-8"
          dangerouslySetInnerHTML={{ __html: part3Content }}
        />
      )}

      {/* Hiển thị nội dung chung (nếu có) */}
      {content && (
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default ArticleDetail;