// TERNARIES
const user = '';
let message;

// if (user) {
// 	message = 'Estas logeado';
// } else {
// 	message = 'No estas logeado';
// }

user ? (message = 'Estas logeado') : (message = 'No estas logeado');

message = user ? 'Estas logeado' : 'No estas logeado';

console.log(message);

// DRY
// dont repeat your self

// REACT

function TeddyBearList({ teddyBears }) {
	return <div>{teddyBears.length ? <p>Iteracion</p> : <p>No hay elementos</p>}</div>;
}

<TeddyBearList teddyBears={[]} />;
