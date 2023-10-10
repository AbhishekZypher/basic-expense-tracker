const ExpenseItem = (props) => {
    return (
        <>
            {props.filteredResult.map((data) =>
                <div className="list-data" key={data.id}>
                    {data.id}
                    <span>{data.name}</span>
                    <span>{data.category}</span>
                    <span>{data.electronics}</span>
                    <span>{data.value}</span>
                    <span>{data.date.toLocaleDateString('en-US')}</span>
                </div>
            )}
        </>
    )

}

export default ExpenseItem;