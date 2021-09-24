import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

import CustomImage from '~/common/components/CustomImage';
import CustomLink from '~/common/components/CustomLink';
import ResponsiveMenu from '~/layouts/ResponsiveMenu';

const Navbar = () => {
	const [showResMenu, setShowResMenu] = useState(false);

	return (
		<>
			<nav className="bg-white dark:bg-gray-800 shadow-lg fixed z-30 inset-x-0 top-0">
				<div className="xl:container mx-auto px-4 md:px-12 xl:px-24">
					<div className="flex items-center h-16">
						<div className="flex items-center mr-auto">
							<CustomLink className="flex items-center flex-shrink-0" href="/">
								<div className="h-10 w-10 relative">
									<CustomImage
										className="rounded-full"
										src="/images/libeyondea.png"
										alt="Libeyondea"
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<span className="text-gray-600 ml-2 text-xl font-bold hidden sm:block">Libeyondea</span>
							</CustomLink>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<CustomLink
										className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										href="/"
									>
										Home
									</CustomLink>
									<CustomLink
										className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										href="/"
									>
										FAQs
									</CustomLink>

									<CustomLink
										className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										href="/"
									>
										About
									</CustomLink>
									<CustomLink
										className="text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
										href="/"
									>
										Contact
									</CustomLink>
								</div>
							</div>
						</div>
						<div className="block">
							<div className="ml-4 flex items-center md:ml-6">
								<div className="ml-3 relative">
									<Menu as="div" className="relative inline-block text-left">
										<div>
											<Menu.Button className="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-500 focus:outline-none">
												<div className="h-8 w-8 relative">
													<CustomImage
														className="rounded-full"
														src="/images/libeyondea.png"
														alt="Libeyondea"
														layout="fill"
														objectFit="cover"
													/>
												</div>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
												<Menu.Item>
													{({ active }) => (
														<CustomLink
															href="/"
															className={`block px-4 py-2 rounded-md text-md ${
																active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
															}`}
														>
															<span className="flex flex-col">
																<span>Settings</span>
															</span>
														</CustomLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<CustomLink
															href="/"
															className={`block px-4 py-2 rounded-md text-md ${
																active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
															}`}
														>
															<span className="flex flex-col">
																<span>Logout</span>
															</span>
														</CustomLink>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
								onClick={() => setShowResMenu(true)}
							>
								<MenuIcon className="h-8 w-8" />
							</button>
						</div>
					</div>
				</div>
			</nav>
			<ResponsiveMenu showResMenu={showResMenu} setShowResMenu={setShowResMenu} />
		</>
	);
};

export default Navbar;
