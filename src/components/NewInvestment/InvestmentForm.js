import React, {useState} from "react";

import styles from './InvestmentForm.module.css';

const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}
const InvestmentForm = (props) => {
     const [userInput, setUserInput] = useState(initialUserInput);

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            }
        })
    }

    const resetHandler = () => {
        setUserInput(initialUserInput)
    }
    const submitHandler = e => {
        e.preventDefault();
        props.onCalculate(userInput);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        value={userInput['current-savings']}
                        type="number"
                        id="current-savings"
                        onChange={(event) =>
                            inputChangeHandler('current-savings', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        value={userInput['yearly-contribution']}
                        type="number"
                        id="yearly-contribution"
                        onChange={(event) =>
                            inputChangeHandler('yearly-contribution', event.target.value)} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        value={userInput['expected-return']}
                        type="number"
                        id="expected-return"
                        onChange={(event) =>
                            inputChangeHandler('expected-return', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        value={userInput['duration']}
                        type="number"
                        id="duration"
                        onChange={(event) =>
                            inputChangeHandler('duration', event.target.value)} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default InvestmentForm;