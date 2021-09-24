import CustomImage from '~/common/components/CustomImage';
import CustomLink from '~/common/components/CustomLink';
import timeAgo from '~/common/utils/timeAgo';
import timeFormat from '~/common/utils/timeFormat';

const PostCard = ({ post }) => {
	return (
		<div className="rounded-lg w-full sm:flex">
			<div className="sm:flex-shrink-0">
				<div className="h-48 sm:h-40 w-full sm:w-60 relative">
					<CustomImage src={post.imageUrl} layout="fill" objectFit="cover" alt="Post" isBlur />
				</div>
			</div>
			<div className="ml-0 sm:ml-3 mt-3 sm:mt-0">
				<div className="flex items-center mb-3">
					<CustomLink href="/" className="block relative">
						<div className="h-8 w-8 relative">
							<CustomImage
								alt={post.user.userName}
								src={post.user.avatarUrl}
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
					</CustomLink>
					<div className="flex flex-col justify-between ml-2 text-xs">
						<CustomLink href="/">
							<p className="text-gray-800 font-bold">{post.user.userName}</p>
						</CustomLink>
						<p className="text-gray-400">
							<time>
								{timeFormat(post.createdAt)} ({timeAgo(post.createdAt)})
							</time>{' '}
							- 666 min read
						</p>
					</div>
				</div>
				<CustomLink href={`/post/${post.slug}`} className="inline-block mb-2">
					<h3 className="text-gray-700 text-xl font-bold hover:text-gray-900">{post.title}</h3>
				</CustomLink>
				<p className="text-gray-400 font-light text-md">{post.excerpt}</p>
				{post.tags.length && (
					<div className="flex flex-wrap justify-starts items-center mt-4">
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
			</div>
		</div>
	);
};

export default PostCard;
