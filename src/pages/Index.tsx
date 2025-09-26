import React from "react";

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
        {/* Tạm thời loại bỏ Button và Link để cô lập lỗi */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
          Khám phá Thư viện
        </button>
      </div>
    </div>
  );
};

export default Index;