import React from 'react';
import { Picture } from './Picture';
export const SearchList = ()=>{
    let totalNumberOfRecords = 0;
    return (
        <div>
            <p>List of Records {totalNumberOfRecords}</p>
            <Picture/>
        </div>
    )
}