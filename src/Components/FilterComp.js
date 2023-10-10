const FilterComp = (props) => {

    const selectedCategory = (event) => {
        props.filterByCategory(event.target.value);
    };

    const selectedDate = (event) => {
        props.filterByDate(event.target.value)
    }

    return (
        <>
            <label>Filter by Category</label>
            <select value={props.selectedCategory} onChange={selectedCategory}>
                <option value='category'>Category Filter</option>
                <option value='Accessories'>Accessories</option>
                <option value='Tv'>TV</option>
                <option value='Laptop'>Laptop</option>
                <option value='Console'>Console</option>
                <option value='Phone'>Phone</option>
            </select>

            <label>Filter by year</label>
            <select value={props.selected} onChange={selectedDate}>
                <option >Date</option>
                <option value='2020'>2020</option>
                <option value='2021' >2021</option>
                <option value='2022' >2022</option>
                <option value='2023'>2023</option>
            </select>
        </>
    )
}

export default FilterComp;