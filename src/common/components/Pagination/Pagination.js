import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { isEmpty, pickBy } from 'lodash';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import CustomLink from '~/common/components/CustomLink';
import getPageNumbers from '~/common/utils/getPageNumbers';
import pageNumber from '~/common/utils/pageNumber';

const Pagination = ({ total, limit, classNameContainer }) => {
	const router = useRouter();
	if (total <= limit) return null;
	const query = pickBy({ ...(router.query || {}) }, (q) => !isEmpty(q));
	const currentPage = pageNumber(query.page);
	const isLastPage = currentPage * limit >= total;
	const pageNumbers = getPageNumbers({ currentPage, limit, total });
	const url = (page) =>
		`?${queryString.stringify({
			...query,
			page
		})}`;

	return (
		<div className={classNameContainer || ''}>
			<nav className="flex text-xs sm:text-sm" aria-label="Pagination">
				<ul className="flex items-center flex-wrap">
					<li>
						<CustomLink
							href={currentPage === 1 ? '#' : url(currentPage - 1)}
							className={classNames(
								'flex items-center px-4 py-2 rounded-md text-gray-700 bg-gray-300 hover:bg-gray-500 hover:text-white mr-1 mb-1',
								{
									'text-opacity-40 bg-opacity-40 pointer-events-none': currentPage === 1
								}
							)}
							scroll={false}
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
						</CustomLink>
					</li>
					{pageNumbers.map((pageNumber, i) =>
						pageNumber === '...' ? (
							<li key={`${pageNumber}${i}`}>
								<span className="flex items-center px-4 py-2 text-gray-700 bg-gray-300 text-opacity-40 bg-opacity-40 rounded-md mr-1 mb-1">
									<DotsHorizontalIcon className="h-4 w-4 sm:h-5 sm:w-5" />
								</span>
							</li>
						) : (
							<li key={pageNumber}>
								<CustomLink
									href={pageNumber === currentPage ? '#' : url(pageNumber)}
									aria-current="page"
									className={classNames(
										'flex items-center px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-500 hover:text-white mr-1 mb-1',
										{
											'bg-gray-500 text-white pointer-events-none': pageNumber === currentPage
										}
									)}
									scroll={false}
								>
									{pageNumber}
								</CustomLink>
							</li>
						)
					)}
					<li>
						<CustomLink
							href={isLastPage ? '#' : url(currentPage + 1)}
							className={classNames(
								'flex items-center px-4 py-2 rounded-md text-gray-700 bg-gray-300 hover:bg-gray-500 hover:text-white mr-1 mb-1',
								{
									'text-opacity-40 bg-opacity-40 pointer-events-none': isLastPage
								}
							)}
							scroll={false}
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
						</CustomLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

Pagination.propTypes = {
	total: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired
};

Pagination.defaultProps = {
	total: 0
};

export default Pagination;
