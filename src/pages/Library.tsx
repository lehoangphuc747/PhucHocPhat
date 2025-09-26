import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
          <CardContent>
            <AspectRatio ratio={16 / 9}>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/zNYT7HBneHY"
                title="Bài hát về sự buông bỏ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Library;