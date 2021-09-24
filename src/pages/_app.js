import '~/styles/globals.css';
import 'nprogress/nprogress.css';

import dynamic from 'next/dynamic';

const ProgressBar = dynamic(
	() => {
		return import('~/common/components/ProgressBar');
	},
	{ ssr: false }
);

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ProgressBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
