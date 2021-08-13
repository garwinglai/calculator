import React from "react";
import "./css/Summation.css";

function Summation({
	firstOrSecond,
	firstNum,
	secondNum,
	newTotal,
	showTotal,
}) {
	return (
		<React.Fragment>
			<div className="summation__container">
				<h1>{showTotal ? newTotal : firstOrSecond ? secondNum : firstNum}</h1>
			</div>
		</React.Fragment>
	);
}

export default Summation;
