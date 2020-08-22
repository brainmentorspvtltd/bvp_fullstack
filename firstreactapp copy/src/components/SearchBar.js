import React from 'react';
export const SearchBar=()=>{
    return (<div className='form-group'>
        <label>Search</label>
        <input type='text' className='form-control' placeholder='Type to Search any Image'/>
        <button className='btn btn-primary'>Search Now</button>
        </div>
        );
}