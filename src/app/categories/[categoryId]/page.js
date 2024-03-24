import { getCategoryNews } from '@/utils/getCategoryNews';
import React from 'react';

const DynamicNewsPage = async({searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category);

    return (
        <div>
            Total news of {searchParams.category} category is {data.length}
        </div>
    );
};

export default DynamicNewsPage;