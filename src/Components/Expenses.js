import { useState } from 'react';
import FilterComp from './FilterComp';
import ExpenseItem from './ExpensesItem';

import '../Styles/Expenses.css';

const Expenses = (props) => {
    const [dateFilter, setDateFilter] = useState('Date');
    const [categoryFilter, setCategoryFilter] = useState('category');

    const filterByCategory = (filteredCategory) => {
        setCategoryFilter(filteredCategory);
    }
    // console.log(categoryFilter)

    const filterByDate = (filteredDate) => {
        setDateFilter(filteredDate);
    }

    const filteredResult = props.list.filter((data) => {
        const yearCondition = data.date.getFullYear().toString() === dateFilter;
        const categoryCondition = data.category === categoryFilter;

        return yearCondition && categoryCondition;
        // return categoryCondition;
    });

    return (
        <>
            <FilterComp selected={dateFilter} selectedCategory={categoryFilter} filterByCategory={filterByCategory} filterByDate={filterByDate} />
            {/* <FilterComp filterByCategory={filterByCategory} /> */}
            {categoryFilter === 'category' ? <>{props.list.map((data) => <div className="list-data" key={data.id}>
                {data.id}
                <span>{data.name}</span>
                <span>{data.category}</span>
                <span>{data.electronics}</span>
                <span>{data.value}</span>
                <span>{data.date.toLocaleDateString('en-US')}</span>
            </div>)}
            </>
                : <ExpenseItem filteredResult={filteredResult} />
            }
            {/* <h1>{categoryFilter}</h1> */}
        </>
    )
}
export default Expenses;
