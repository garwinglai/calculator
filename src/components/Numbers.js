import React, { useState } from "react";
import "./css/Numbers.css";
import Summation from "./Summation";

function Numbers() {
	const [values, setValues] = useState({
		firstValue: [],
		secondValue: [],
		arithmetic: "",
		total: "",
		haveTotal: false,
		math: false,
		showFirstSecond: false,
		clear: false,
	});

	const {
		firstValue,
		secondValue,
		total,
		math,
		showFirstSecond,
		arithmetic,
		haveTotal,
		clear,
	} = values;
	let firstNumArr = [];
	let secondNumArr = [];
	let totalNum = "";

	function handleFirstClick(e) {
		e.preventDefault();
		const { name } = e.target;

		if (name === "+" || name === "-" || name === "/" || name === "*") {
			if (clear) {
				return setValues({ ...values, arithmetic: name, clear: false });
			} else {
				if (firstValue === []) {
					return;
				} else {
					if (total === "") {
						return setValues({
							...values,
							math: true,
							arithmetic: name,
						});
					} else {
						let newTotal = mathFunction();
						return setValues({
							...values,
							clear: false,
							firstValue: [],
							secondValue: [],
							total: newTotal,
							haveTotal: true,
							math: true,
							arithmetic: name,
						});
					}
				}
			}
		} else if (name === "RESET") {
			return setValues({
				...values,
				firstValue: [],
				secondValue: [],
				arithmetic: "",
				haveTotal: false,
				showFirstSecond: false,
				math: false,
				total: "",
			});
		} else if (name === "DEL") {
			if (firstValue === []) {
				return;
			} else {
				return setValues({
					...values,
					firstValue: firstValue.filter((item, index) => {
						return index !== firstValue.length - 1;
					}),
				});
			}
		} else if (name === "=") {
			if (total === "" || firstValue === []) {
				return;
			} else {
				let newTotal = mathFunction();

				return setValues({
					...values,
					haveTotal: true,
					total: newTotal,
					firstValue: [],
					secondValue: [],
					clear: true,
					arithmetic: "",
					showFirstSecond: false,
					math: false,
				});
			}
		} else {
			if (clear) {
				return setValues({
					...values,
					total: "",
					haveTotal: false,
					firstValue: [...firstValue, name],
					clear: false,
				});
			} else {
				return setValues({
					...values,
					firstValue: [...firstValue, name],
					haveTotal: false,
				});
			}
		}
	}

	function handleSecondClick(e) {
		e.preventDefault();
		const { name } = e.target;
		if (name === "+" || name === "-" || name === "/" || name === "*") {
			if (clear) {
				return setValues({ ...values, clear: false, arithmetic: name });
			} else {
				if (secondValue === []) {
					return;
				} else {
					let newTotal = mathFunction();

					return setValues({
						...values,
						total: newTotal,
						haveTotal: true,
						firstValue: [],
						secondValue: [],
						arithmetic: name,
						showFirstSecond: false,
						math: false,
					});
				}
			}
		} else if (name === "RESET") {
			return setValues({
				...values,
				math: false,
				firstValue: [],
				secondValue: [],
				arithmetic: "",
				haveTotal: false,
				total: "",
				showFirstSecond: false,
			});
		} else if (name === "DEL") {
			if (secondValue === []) {
				return;
			} else {
				return setValues({
					...values,
					secondValue: secondValue.filter((item, index) => {
						return index !== secondValue.length - 1;
					}),
				});
			}
		} else if (name === "=") {
			if (secondValue === []) {
				return;
			} else {
				let newTotal = mathFunction();
				return setValues({
					...values,
					haveTotal: true,
					total: newTotal,
					firstValue: [],
					secondValue: [],
					arithmetic: "",
					showFirstSecond: false,
					math: false,
					clear: true,
				});
			}
		} else {
			if (clear) {
				return setValues({
					...values,
					clear: false,
					haveTotal: false,
					showFirstSecond: true,
					secondValue: [...secondValue, name],
				});
			}
			return setValues({
				...values,
				haveTotal: false,
				showFirstSecond: true,
				secondValue: [...secondValue, name],
			});
		}
	}

	function mathFunction() {
		let firstNum = parseFloat(firstValue.join(""));
		let secondNum = parseFloat(secondValue.join(""));
		console.log(total);
		console.log(firstValue);
		console.log(secondValue);
		let newTotal = 0;

		if (total === "") {
			console.log("foo");
			switch (arithmetic) {
				case "+":
					newTotal = firstNum + secondNum;
					break;
				case "-":
					newTotal = firstNum - secondNum;
					break;
				case "/":
					newTotal = firstNum / secondNum;
					break;
				case "*":
					newTotal = firstNum * secondNum;
					break;
				default:
					break;
			}
			// return newTotal;
		} else {
			if (!showFirstSecond) {
				switch (arithmetic) {
					case "+":
						newTotal = total + firstNum;
						break;
					case "-":
						newTotal = total - firstNum;
						break;
					case "/":
						newTotal = total / firstNum;
						break;
					case "*":
						newTotal = total * firstNum;
						break;
					default:
						break;
				}
				// return newTotal;
			} else {
				console.log("foo bar");
				switch (arithmetic) {
					case "+":
						newTotal = total + secondNum;
						break;
					case "-":
						newTotal = total - secondNum;
						break;
					case "/":
						newTotal = total / secondNum;
						break;
					case "*":
						newTotal = total * secondNum;
						break;
					default:
						break;
				}
				// return newTotal;
			}
		}
    
		return newTotal;
	}

	function displayNumbers() {
		const numPadArr = [
			7,
			8,
			9,
			"DEL",
			4,
			5,
			6,
			"+",
			1,
			2,
			3,
			"-",
			".",
			0,
			"/",
			"*",
			"RESET",
			"=",
		];

		return numPadArr.map((item, index) => {
			return (
				<button
					onClick={math ? handleSecondClick : handleFirstClick}
					name={item}
					type="button"
					className={`button${index} btn btn-light`}
					key={index}
				>
					{item}
				</button>
			);
		});
	}

	function showNumberGrid() {
		return <div className="numbers__container">{displayNumbers()}</div>;
	}

	return (
		<div>
			<Summation
				firstOrSecond={showFirstSecond}
				firstNum={firstValue}
				secondNum={secondValue}
				newTotal={total}
				showTotal={haveTotal}
			/>
			{showNumberGrid()}
		</div>
	);
}

export default Numbers;
