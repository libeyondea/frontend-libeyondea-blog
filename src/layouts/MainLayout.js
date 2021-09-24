import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="xl:container mt-16 py-8 mx-auto px-4 md:px-12 xl:px-24">
				<div className="grid grid-cols-4 gap-8">
					<div className="col-span-4 lg:col-span-3 w-full">{children}</div>
					<div className="col-span-4 lg:col-span-1 w-full">
						<div className="sticky top-24">
							<Sidebar />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
