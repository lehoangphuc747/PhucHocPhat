import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Phúc học Phật
          </h1>
          <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-400 space-y-2 italic">
            <p>"Lấy từ bi làm gốc</p>
            <p>Lấy trí tuệ làm sự nghiệp</p>
            <p>Sống một đời không oán hận, không ganh đua, không hơn thua</p>
            <p>Đó là cách sống của một người có đạo."</p>
          </blockquote>
        </div>
      </main>
      <footer className="w-full">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;