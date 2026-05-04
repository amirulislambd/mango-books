import { getData } from '@/lib/dataFetch';
import React from 'react';

const sitemap = async() => {
    const books = await getData()
    return (
        <div>
            
        </div>
    );
};

export default sitemap;