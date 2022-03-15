/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
	let res = [],
		len = nums.length
	for (let i = 0; i < 1 << len; i++) {
		let arr = []
		for (let j = 0; j < len; j++) {
			if (i & (1 << j)) {
				arr.push(nums[j])
			}
		}
		arr.length > 0 && res.push(arr)
	}
	let result = []
	for (let i = 0; i < res.length; i++) {
		if (res[i].length === 1) {
			result.push(res[i][0] | 0)
			continue
		}
		let temp = 0
		res[i].forEach((item) => {
			temp |= item
		})
		result.push(temp)
	}
	const max = Math.max(...result)
	let ans = 0
	result.forEach((i) => {
		if (i === max) {
			ans++
		}
	})
	return ans
}

countMaxOrSubsets([3, 1])
