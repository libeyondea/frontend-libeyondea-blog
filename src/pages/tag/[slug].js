import Pagination from '~/common/components/Pagination';
import PostCard from '~/common/components/PostCard';
import { posts } from '~/common/utils/data';
import MainLayout from '~/layouts/MainLayout';

const Tag = () => {
	return (
		<MainLayout>
			<div className="mb-8">
				<h2 className="text-4xl font-bold text-gray-800">Tag</h2>
			</div>
			<div className="mb-8">
				<p className="text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Dictum at tempor commodo ullamcorper. Amet venenatis urna cursus eget nunc
				</p>
			</div>
			<div className="mb-8">
				<p className="text-4xl font-bold text-gray-800">Posts</p>
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

export default Tag;
