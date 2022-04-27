// // You are given a function, Square, that takes four parameters, a, b, c, d,
// // denoting the length of the square edges.
// // Using prototype properties, add a method to Square named isSquare that
// // prints true if a Square object has equal edges and false if they are unequal.
// // Here is the Square function:

// (mySquare = {
//   a: 1,
//   b: 1,
//   c: 1,
//   d: 1,
// }),
//   function Square(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
//   };

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
  if (this.a === this.b && this.b === this.c && this.c === this.d) {
    return true;
  } else {
    return false;
  }
};
const mySquare = new Square(1, 1, 2, 1);
// isSquare.prototype.valueOf((a = b), (c = d), (b = c));
console.log(mySquare.isSquare());
