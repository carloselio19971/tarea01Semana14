// Shorthand Property Names

const a = 'sayHello';
const b = 50;
const c = [1, 2, 3];

// BEFORE
const objectLiteral = {
	a: a,
	b: b,
	c: c,
};

// name : 'Diego'
console.log(objectLiteral);

// TODAY
const objectLiteralWithShorthand = {
	a,
	b,
	c,
};

console.log(objectLiteralWithShorthand);
