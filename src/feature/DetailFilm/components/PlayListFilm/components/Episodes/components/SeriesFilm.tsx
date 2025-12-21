import { MovieData } from "@/src/types/entities/Movie";

interface ContentfilmProps {
  detailFilm: MovieData;
}
export default function SeriesFilm({ detailFilm }: ContentfilmProps) {
  return <div className="test-white">Phim Bộ</div>;
}
