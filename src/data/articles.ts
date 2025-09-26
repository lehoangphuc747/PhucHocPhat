export interface Article {
  id: string;
  title: string;
  videoUrl: string;
}

export const articles: Article[] = [
  {
    id: "bai-hat-ve-su-buong-bo",
    title: "Bài hát về sự buông bỏ",
    videoUrl: "https://www.youtube.com/embed/zNYT7HBneHY",
  },
  {
    id: "con-duong-tro-thanh-phat-tu",
    title: "Con đường trở thành Phật tử",
    videoUrl: "https://www.youtube.com/embed/-3xn4oe9Arc",
  },
];