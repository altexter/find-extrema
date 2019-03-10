//Extremums - points, where the derivative of a function changes signs
function extremum(input) {
	let output = []; // Extremums array
  let presign; // Derivative sign of a previous point
  let sign; // Derivative sign of a current point
  let zeros = 0; // Number of horizontal inflection points
  for (i = 1; i < input.length; i++) {
    sign = Math.sign(input[i][1] - input[i-1][1]); // Find derivative sign of the current point
    if (typeof presign !== 'undefined' && sign !== 0 && sign !== presign) { // Get extremum point where derevateive sign changes 
    	output.push(input[i-1-Math.round(zeros/2)]); 
    }
    if (sign === 0) {
    	zeros++;
    } else {
    	zeros = 0;
      presign = sign;
    } 
  }
  return output;
}

// let input = [[-0.2,2.4],[0,2],[0.2,1.6],[0.4,1.4],[0.6,1.2],[0.8,1],[1,1],[1.2,1],[1.4,1.2],[1.6,1.4],[1.8,1.6],[2,2]];
// extremum(input);

// output: [[1,1]]
