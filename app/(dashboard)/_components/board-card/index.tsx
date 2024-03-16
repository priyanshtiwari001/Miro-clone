interface BoardCardProps {
  key: string;
  id: string;
  title: string;
  authorId: string;
  authorName?: string;
  imageUrl: string;
  createdAt: number;
  ordId: string;
  isFavorite: boolean;
}
const BoardCard = ({
  key,
  id,
  title,
  authorId,
  authorName,
  imageUrl,
  createdAt,
  ordId,
  isFavorite,
}: BoardCardProps) => {
  return <div>BoardCard</div>;
};
export default BoardCard;
