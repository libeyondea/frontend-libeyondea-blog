import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

import CustomLink from '~/common/components/CustomLink';

const ResponsiveMenu = ({ showResMenu, setShowResMenu }) => {
	return (
		<Transition.Root show={showResMenu}>
			<Dialog as="div" className="fixed inset-0 overflow-hidden z-40" onClose={setShowResMenu}>
				<div className="absolute inset-0 overflow-hidden">
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-y-0 left-0 max-w-full flex">
						<Transition.Child
							as={Fragment}
							enter="transform transition ease-in-out duration-500 sm:duration-700"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transform transition ease-in-out duration-500 sm:duration-700"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<div className="relative bg-white w-screen max-w-xs">
								<div className="flex flex-col sm:flex-row sm:justify-around">
									<div className="h-screen w-full">
										<div className="border-b-2">
											<div className="flex items-center px-6 py-3">
												<span className="text-gray-600 text-xl font-bold">Libeyondea</span>
												<button
													type="button"
													className="p-1 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-300 ml-auto"
													onClick={() => setShowResMenu(false)}
												>
													<span className="sr-only">Close panel</span>
													<XCircleIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</div>
										<nav className="py-4 px-2">
											<CustomLink
												className="text-sm hover:text-gray-800 hover:bg-gray-100 flex items-center px-4 py-2 transition-colors duration-200 text-gray-600 rounded-lg font-medium"
												href="/"
											>
												<span>Home</span>
											</CustomLink>
											<CustomLink
												className="text-sm hover:text-gray-800 hover:bg-gray-100 flex items-center px-4 py-2 transition-colors duration-200 text-gray-600 rounded-lg font-medium"
												href="/"
											>
												<span>FAQs</span>
											</CustomLink>
											<CustomLink
												className="text-sm hover:text-gray-800 hover:bg-gray-100 flex items-center px-4 py-2 transition-colors duration-200 text-gray-600 rounded-lg font-medium"
												href="/"
											>
												<span>About</span>
											</CustomLink>
											<CustomLink
												className="text-sm hover:text-gray-800 hover:bg-gray-100 flex items-center px-4 py-2 transition-colors duration-200 text-gray-600 rounded-lg font-medium"
												href="/"
											>
												<span>Contact</span>
											</CustomLink>
											<Disclosure>
												{({ open }) => (
													<>
														<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-600 rounded-lg hover:text-gray-800 hover:bg-gray-100 focus:outline-none">
															<span>Categories</span>
															<ChevronLeftIcon className={`${open ? 'transform -rotate-90' : ''} w-5 h-5`} />
														</Disclosure.Button>
														<Disclosure.Panel className="text-sm text-gray-500">
															<CustomLink
																className="hover:text-gray-800 hover:bg-gray-100 flex items-center pl-6 pr-4 py-2 transition-colors duration-200 text-gray-600 rounded-lg"
																href="/"
															>
																<span>Category 1</span>
															</CustomLink>
														</Disclosure.Panel>
													</>
												)}
											</Disclosure>
										</nav>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default ResponsiveMenu;
