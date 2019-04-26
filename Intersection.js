var intersection = function(nums1, nums2) {
    // const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const unique = new Set(nums1.filter(number => set2.has(number)))
    return [...unique]
    
};
