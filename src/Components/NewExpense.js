import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import '../Styles/NewExpense.css';

const FilterComp = (props) => {
    const [formDisplay, setFormDisplay] = useState(false);

    const newExpenseData = (newExpenseObj) => {
        props.newExpenseData(newExpenseObj)
        setFormDisplay(false); //hides the form after the submission
    }

    const displayForm = () => {
        setFormDisplay(true);
    }

    // passing this function as a pointer to the cancel button
    const notDisplayForm = () => {
        setFormDisplay(false);
    }

    return (
        <div>
            {/* conditional rendering */}
            {!formDisplay && <button onClick={displayForm}>Add Expense</button>}
            {formDisplay && <ExpenseForm onCancel={notDisplayForm} newExpense={newExpenseData} />}
        </div>
    );
}

export default FilterComp;