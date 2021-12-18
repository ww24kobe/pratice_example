// 暴利枚举

// 复杂度分析：
// 时间复杂度： O(n2), n为数组的长度
// 空间复杂度:  O(1)，只用到常数个临时变量。记1.
// 执行用时: 144 ms
// 内存消耗: 38.6 MB

function twoSum(nums, target) {
    let len = nums.length;
    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
    throw new Error('not found')
}

console.log( twoSum([2, 7, 11, 15], 9) ); // [0,1]


// hashMap 查表法： 以空间换时间
// 复杂度分析：
// 时间复杂度： O(n), n为数组的长度
// 空间复杂度:  O(n)，哈希表中最多存储n-1键值对， 忽略常数 1
// 执行用时: 68 ms
// 内存消耗: 40.2 MB
function twoSumVersion(nums,target){
    const hashMap = new Map();
    hashMap.set(nums[0],0)
    for(var i = 1; i < nums.length; i++){
        let key = target - nums[i];
        if(hashMap.has(key)){
            return [hashMap.get(key),i]
        }
        hashMap.set(nums[i], i)
    }
}

console.log(twoSumVersion([2, 7, 11, 15], 9)); // [0,1]



// 小结： 找规律，得出计算方法（公式）