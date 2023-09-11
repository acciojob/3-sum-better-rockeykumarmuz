function threeSum(arr, target) {
// write your code here

	arr.sort((a, b)=>{
		return a - b;
	});
	
	let min = Infinity;
	let ans = 0;

    let n = arr.length;

	for(let i=0; i<n; i++) {
		let s = i+1 ;
	    let e = n-1;

		while(s<e) {
			let sum = arr[i] + arr[s] + arr[e];

			if(sum == target) {
				return sum;
            }

			if(Math.abs(min)>Math.abs(target - sum)) {
				min = target-sum;
				ans = sum;
			} else if(sum>target) {
				e--;
			} else {
               s++;
			}
        }
	}

	return ans;
}

module.exports = threeSum;
