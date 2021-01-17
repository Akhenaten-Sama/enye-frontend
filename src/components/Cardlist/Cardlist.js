import React, { useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import ReactPaginate from 'react-paginate';
import './Cardlist.scss';

export default function Cardlist({ profiles, criteria, filterWord }) {
	const [ currentPage, setCurrentPage ] = useState(0);
	const PER_PAGE = 20;
	let filteredProfiles;
	const offset = currentPage * PER_PAGE;
	filterWord
		? (filteredProfiles = profiles.filter((profile) => {
				return profile[criteria].toLowerCase().includes(filterWord.toLowerCase());
			}))
		: (filteredProfiles = profiles);
	console.log(profiles);
	const pageCount = Math.ceil(filteredProfiles.length / PER_PAGE);
	const currentPageData = filteredProfiles
		.slice(offset, offset + PER_PAGE)
		.map((profile) => <ProfileCard key={profile.UserName} profile={profile} />);
	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}
	return (
		<div className='cardlist'>
			<ReactPaginate
				previousLabel={'← Previous'}
				nextLabel={'Next →'}
				pageCount={pageCount}
				onPageChange={handlePageClick}
				containerClassName={'pagination'}
				previousLinkClassName={'pagination__link'}
				nextLinkClassName={'pagination__link'}
				disabledClassName={'pagination__link--disabled'}
				activeClassName={'pagination__link--active'}
			/>

			<div className="container">{currentPageData}</div>
		</div>
	);
}
