var searchInsert = function(nums, target) {
    if(nums.indexOf(target)) {
       return nums.indexOf(target)
    } else {
        nums.append(target)
        nums.sort()
        return nums.indexOf(target)
    }
};
console.log(searchInsert([1,3,5,6],7))
