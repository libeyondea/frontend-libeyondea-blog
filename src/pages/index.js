import Pagination from '~/common/components/Pagination';
import PostCard from '~/common/components/PostCard';
import httpRequest from '~/common/utils/httpRequest';
import pageNumber from '~/common/utils/pageNumber';
import MainLayout from '~/layouts/MainLayout';

const Home = ({ posts }) => {
	return (
		<MainLayout>
			<div className="mb-8">
				<h2 className="text-4xl font-bold text-gray-800">Lastest posts</h2>
			</div>
			<div className="grid grid-cols-1 gap-8">
				{!posts.data.length ? <div>No posts</div> : posts.data.map((post) => <PostCard post={post} key={post.id} />)}
				<Pagination total={posts.pagination.total} limit={10} />
			</div>
		</MainLayout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const resPosts = await httpRequest.get({
			url: '/posts',
			params: {
				offset: (pageNumber(query.page) - 1) * 10,
				limit: 10
			}
		});
		if (resPosts.data.success) {
			return {
				props: {
					posts: resPosts.data
				}
			};
		}
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default Home;
