// ARROW FUNCTIONS

// BEFORE
function addTen(a) {
	return a + 10;
}

function readFive() {
	return 5;
}

function divideNumbers(a, b) {
	return a / b;
}

// TODAY
const addTenWithAF = (a) => a + 10;
const readFiveWithAF = () => 5;
const divideNumbersWithAF = (a, b) => a / b;

// REACT

const arrPersons = [
	{ id: 1, name: 'Diego' },
	{ id: 2, name: 'Jose' },
];

function TeddyBearList({ arrPersons }) {
	return (
		<ul>
			{arrPersons.map((person) => (
				<li>{person.name}</li>
			))}
		</ul>
	);
}


<TeddyBearList arrPersons={arrPersons} />;

// JSX