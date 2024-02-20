// Parameters Defaults

// BEFORE
function addNums(a, b) {
	b = b === undefined ? 0 : b;
	return a + b;
}

// TODAY
function addNumsWithPD(a = 0, b = 10) {
	return a + b;
}

const addNumbsWithAF = (a = 10, b = 0) => a + b;

// addNums(10)
// 10 + undefined
console.log(addNumbsWithAF());

// REACT

function sayHello({ message = '' }) {
	return <div>{message}</div>;
}

<sayHello message="Soy el mensaje" />;
