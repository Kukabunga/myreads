import React from 'react'

const Filter = ({onFilter}) => (
    <div className="filter-box text-center">
        <input type="search" className="filter" placeholder="Filter your books" onChange={(e) => onFilter(e.target.value)} />
    </div>
)
export default Filter;