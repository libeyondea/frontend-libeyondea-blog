import CustomImage from '~/common/components/CustomImage';
import CustomLink from '~/common/components/CustomLink';
import PostCard from '~/common/components/PostCard';
import httpRequest from '~/common/utils/httpRequest';
import timeFormat from '~/common/utils/timeFormat';
import MainLayout from '~/layouts/MainLayout';

const Post = ({ post, relatedPosts }) => {
	return (
		<MainLayout>
			<div className="grid grid-cols-1 gap-8">
				<div className="border-b-4">
					<article>
						{post.data.imageUrl && (
							<CustomImage
								src={post.data.imageUrl}
								className=""
								alt="Cover Image"
								layout="responsive"
								width={500}
								height={200}
								isBlur
							/>
						)}
						<div className="py-4">
							<div className="mb-4">
								<h1 className="text-gray-900 text-3xl md:text-5xl font-medium">{post.data.title}</h1>
							</div>
							<div className="flex items-center">
								<CustomLink href="/" className="block relative">
									<div className="h-12 w-12 relative">
										<CustomImage
											alt={post.data.user.userName}
											src={post.data.user.avatarUrl}
											layout="fill"
											objectFit="cover"
											className="rounded-full"
										/>
									</div>
								</CustomLink>
								<div className="flex flex-col justify-between ml-2">
									<CustomLink href="/">
										<p className="text-gray-800 font-bold">{post.data.user.userName}</p>
									</CustomLink>
									<p className="text-gray-400">
										<time dateTime={post.data.createdAt}>{timeFormat(post.data.createdAt)}</time> - 666 min read
									</p>
								</div>
							</div>
							<div className="prose max-w-none lg:prose-lg py-8">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacued eu odio nec nisl varius
									placerat. In dapibus a lacus vitae fringilla.
								</p>
								<p>
									Donec condimentum tellus augue, eu lacinia est facilisis eu. Suspent ipPris a, cursus augue. Sed vitae dictum
									diam, id interdum ex.
								</p>
								<p>
									Nunc in nunc sed urna congue facilisis. In ullamcorper, nunc eget convallis imperdiet, quam felis rhoncus leo,
									id rhoncus erat leo vel
								</p>
							</div>
							{post.data.tags.length && (
								<div className="flex flex-wrap justify-starts items-center mb-1">
									<span className="mr-1 mb-1">Tags:</span>
									{post.data.tags.map((tag) => (
										<CustomLink
											href={`/tag/${tag.slug}`}
											className="text-xs mr-1 mb-1 py-1.5 px-4 text-gray-600 bg-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-2xl"
											key={tag.id}
										>
											<span className="text-gray-400">#</span>
											{tag.title}
										</CustomLink>
									))}
								</div>
							)}
							{post.data.categories.length && (
								<div className="flex flex-wrap justify-starts items-center">
									<span className="mr-1 mb-1">Categories:</span>
									{post.data.categories.map((tag) => (
										<CustomLink
											href={`/tag/${tag.slug}`}
											className="text-xs mr-1 mb-1 py-1.5 px-4 text-gray-600 bg-gray-200 hover:bg-gray-300 hover:text-gray-700 rounded-2xl"
											key={tag.id}
										>
											{tag.title}
										</CustomLink>
									))}
								</div>
							)}
						</div>
					</article>
				</div>
				<div>
					<div className="mb-8">
						<h4 className="text-gray-900 text-2xl font-medium">Related articles</h4>
					</div>
					<div className="grid grid-cols-1 gap-8">
						{relatedPosts.data.length && relatedPosts.data.map((post) => <PostCard post={post} key={post.id} />)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export async function getServerSideProps({ query }) {
	try {
		const [resPost, resRelatedPosts] = await Promise.all([
			httpRequest.get({
				url: `/posts/${query.slug}`
			}),
			httpRequest.get({
				url: `/posts`,
				params: {
					offset: 0,
					limit: 10
				}
			})
		]);
		if (resPost.data.success && resRelatedPosts.data.success) {
			return {
				props: {
					post: resPost.data,
					relatedPosts: resRelatedPosts.data
				}
			};
		}
	} catch (err) {
		return {
			notFound: true
		};
	}
}

export default Post;
