import './ExpenseItem.css';

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    return (

        <ection>

            {/* here we can pass the data through props method 👍 */}

            <div className="expense-item">
                <div>
                    {props.date.toISOString()}
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </div>

            {/* here we can pass the data through props method 👍 */}


            {/* Normal data we pass like that 👇 which is hard coded on the top */}

            {/* <div className="expense-item">
                <div>
                    {expenseDate.toISOString}
                </div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </div> */}

            {/* Normal data we pass like that ⏫ which is hard coded on the top*/}

        </ection>



    );
}

export default ExpenseItem;  