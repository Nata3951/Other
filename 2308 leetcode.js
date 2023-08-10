var findDisappearedNumbers = function(nums) {
    nums[nums.length] = nums[0];
    nums[0] = 0;
    let hold = [0];
    for (let i = 1; i < nums.length; i++) {
        let k = nums[i]; // first index to use as a mark
        while (!hold.includes(k)) {
            hold.push(k);
            k = nums[k]; // next index  
        };
        hold.forEach(el => nums[el] = 0)
    }
    
    nums.forEach((el, ind) => {
        if (el > 0) nums[ind] = ind;
    })

    nums.sort((a, b) => b - a);
    let first_zero = nums.indexOf(0);
    nums.splice(first_zero);
    return nums;
};
