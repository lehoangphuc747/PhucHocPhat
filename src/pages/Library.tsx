import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Library = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6 text-center text-gray-800 dark:text-gray-200">
        Thư viện
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Bài hát về sự buông bỏ</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Con đường trở thành Phật tử</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Library;