import NewsList from '@/components/news-list';
import { DUMMY_NEWS } from '@/dummy-news';
export default function News() {
  return (
    <div>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
