export default function handler(req, res) {
	res.status(200).json({
		success: true,
		data: {
			id: '1',
			title: 'Cras ornare arcu dui vivamus arcu',
			slug: 'slug-test',
			excerpt:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper. Amet venenatis urna cursus eget nunc...',
			imageUrl: '/images/libeyondea-background-night.png',
			createdAt: '2021-09-16T06:32:31.276+00:00',
			updatedAt: '2021-09-16T06:32:31.276+00:00',
			tags: [
				{ id: '1', title: 'Tag1', slug: 'tag1' },
				{ id: '2', title: 'Tag1', slug: 'tag1' },
				{ id: '3', title: 'Tag1', slug: 'tag1' },
				{ id: '4', title: 'Tag1', slug: 'tag1' },
				{ id: '5', title: 'Tag1', slug: 'tag1' },
				{ id: '6', title: 'Tag1', slug: 'tag1' },
				{ id: '7', title: 'Tag1', slug: 'tag1' },
				{ id: '8', title: 'Tag1', slug: 'tag1' },
				{ id: '9', title: 'Tag1', slug: 'tag1' }
			],
			categories: [
				{ id: '1', title: 'Cat1', slug: 'cat1' },
				{ id: '2', title: 'Cat1', slug: 'cat1' },
				{ id: '3', title: 'Cat1', slug: 'cat1' }
			],
			user: { id: '1', userName: 'libeyondea', avatarUrl: '/images/libeyondea.png' }
		}
	});
}
