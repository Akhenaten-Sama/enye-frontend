import React from 'react';
import './filter.scss';

export default function Searchbox({ handleChange, handleGender }) {
	return (
		<div className="search-div">
            <div className='search'>
             <label>Search Name</label>
			<input  type="search" name="searchField" placeholder="search FirstName" onChange={handleChange} />
			</div>
            <div className='search'>
				<label  htmlFor="genderField">Filter By Gender:&nbsp;&nbsp;&nbsp;&nbsp;</label>
				<select onChange={handleGender} name="genderField">
					<option default>--Please choose an option--</option>
					<option value="Male">Male</option>
					<option value="FeMale">FeMale</option>
					<option value="prefer to skip">Prefer to skip</option>
				</select>
			</div>

			<div className='search'>
				<label htmlFor="">Filter By Payment Method:&nbsp;</label>
				<select onChange={handleGender} name="paymentMethod">
					<option default>--Please choose an option--</option>
					<option value="Check">Check</option>
					<option value="paypal">paypal</option>
					<option value="cc">cc</option>
					<option value="money order">money order</option>
				</select>
			</div>
		</div>
	);
}
