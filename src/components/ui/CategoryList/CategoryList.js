import { getAllCategories } from '@/utils/getAllCategories';
import React from 'react';

const CategoryList = async() => {
    const {data:allCategories} = await getAllCategories();
    console.log(allCategories);
    return (
        <div>
            All Categories
        </div>
    );
};

export default CategoryList;