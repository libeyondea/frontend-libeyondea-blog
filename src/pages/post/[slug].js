import CustomImage from '~/common/components/CustomImage';
import CustomLink from '~/common/components/CustomLink';
import PostCard from '~/common/components/PostCard';
import { post, posts } from '~/common/utils/data';
import timeFormat from '~/common/utils/timeFormat';
import MainLayout from '~/layouts/MainLayout';

const Post = () => {
	return (
		<MainLayout>
			<div className="grid grid-cols-1 gap-8">
				<div className="border-b-4">
					<article>
						{post.imageUrl && (
							<CustomImage
								src={post.imageUrl}
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
								<h1 className="text-gray-900 text-3xl md:text-5xl font-medium">{post.title}</h1>
							</div>
							<div className="flex items-center">
								<CustomLink href="/" className="block relative">
									<div className="h-12 w-12 relative">
										<CustomImage
											alt={post.user.userName}
											src={post.user.avatarUrl}
											layout="fill"
											objectFit="cover"
											className="rounded-full"
										/>
									</div>
								</CustomLink>
								<div className="flex flex-col justify-between ml-2">
									<CustomLink href="/">
										<p className="text-gray-800 font-bold">{post.user.userName}</p>
									</CustomLink>
									<p className="text-gray-400">
										<time dateTime={post.createdAt}>{timeFormat(post.createdAt)}</time> - 666 min read
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
							{post.tags.length && (
								<div className="flex flex-wrap justify-starts items-center mb-1">
									<span className="mr-1 mb-1">Tags:</span>
									{post.tags.map((tag) => (
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
							{post.categories.length && (
								<div className="flex flex-wrap justify-starts items-center">
									<span className="mr-1 mb-1">Categories:</span>
									{post.categories.map((tag) => (
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
						{posts.length && posts.map((post) => <PostCard post={post} key={post.id} />)}
					</div>
				</div>
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

export default Post;
