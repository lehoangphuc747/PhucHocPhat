import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Import Button component

const Index = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Phúc học Phật
        </h1>
        <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-400 space-y-2 italic mb-8">
          <p>"Lấy từ bi làm gốc</p>
          <p>Lấy trí tuệ làm sự nghiệp</p>
          <p>Sống một đời không oán hận, không ganh đua, không hơn thua</p>
          <p>Đó là cách sống của một người có đạo."</p>
        </blockquote>
        <Button asChild size="lg"> {/* Thêm nút Khám phá */}
          <Link to="/library">
            Khám phá Thư viện
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;