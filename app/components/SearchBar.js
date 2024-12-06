'use client'

import React from 'react'

export default function SearchBar({onSearch}) {

	const handleInputChange = (e) => {
		onSearch(e.target.value)
	}

	return (
		<div className='flex items-center space-x-2'>
			<input
				type="text"
				onChange={handleInputChange}
				placeholder="Search recipes..."
				className="border p2 rounded-md w-full"
			/>
		</div>
	
	)
}
