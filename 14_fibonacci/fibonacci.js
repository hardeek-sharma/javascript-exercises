const fibonacci = function(index) {
  if (index < 0) return 'OOPS';
  let nums = [0, 1];
  for (i = 1; i < index; i++) {
    nums.push(nums[i] + nums[i-1]);
  }

    return nums[index];
};

// Do not edit below this line
module.exports = fibonacci;
