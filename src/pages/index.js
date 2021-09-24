import Pagination from '~/common/components/Pagination';
import PostCard from '~/common/components/PostCard';
import { posts } from '~/common/utils/data';
import MainLayout from '~/layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout>
			<div className="mb-8">
				<p className="text-4xl font-bold text-gray-800">Lastest posts</p>
			</div>
			<div className="grid grid-cols-1 gap-8">
				{!posts.length ? <div>No posts</div> : posts.map((post) => <PostCard post={post} key={post.id} />)}
				<Pagination total={6666} limit={10} />
			</div>
		</MainLayout>
	);
};

export async function getServerSideProps({ query }) {
	return {
		props: {
			query
		}
	};
}

export default Home;
