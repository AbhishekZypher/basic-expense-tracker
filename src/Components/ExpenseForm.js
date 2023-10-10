import { useState } from "react";

const ExpenseForm = (props) => {
    const [enteredId, setEnteredId] = useState("");
    const [enteredName, setEnteredName] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const newExpenseObj = {
        id: enteredId,
        name: enteredName,
        category: enteredCategory,
        price: enteredPrice,
        date: new Date(enteredDate)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.newExpense(newExpenseObj);
        setEnteredId('');
        setEnteredDate('');
        setEnteredCategory('');
        setEnteredPrice('');
        setEnteredName('');
    }

    const changeIdHandler = (event) => {
        setEnteredId(event.target.value);
    };
    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const changePriceHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const changeCategoryHandler = (event) => {
        setEnteredCategory(event.target.value);
    };
    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    return (
        <>
            <form className="form-section" onSubmit={submitHandler}>
                <label>Id
                    <input value={enteredId} onChange={changeIdHandler} type="number" />
                </label>

                <label>Name
                    <input value={enteredName} onChange={changeNameHandler} />
                </label>

                <label>Category
                    <select value={enteredCategory} onChange={changeCategoryHandler}>
                        <option>Select Category</option>
                        <option>Accessories</option>
                        <option>Laptops</option>
                        <option>Console</option>
                        <option>Phone</option>
                        <option>TV</option>
                    </select>
                </label>

                <label>Price
                    <input value={enteredPrice} onChange={changePriceHandler} type="number" />
                </label>
                <label>Date
                    <input value={enteredDate} onChange={changeDateHandler} type="date" />
                </label>
                <button typeof="button" onClick={props.onCancel}>Cancel</button>
                <button typeof="submit">Submit</button>
            </form>
        </>
    )
}

export default ExpenseForm;