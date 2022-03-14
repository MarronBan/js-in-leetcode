/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
	//me
	/* let l1 = list1.length,
		l2 = list2.length
	let m = new Map()
	for (let i = 0; i < l1; i++) {
		for (let j = 0; j < l2; j++) {
			if (list1[i] === list2[j]) {
				m.set(i, i + j)
			}
		}
	}
	let minIndexNum = 2000,
		resArr = []
	let indexValue = [...m.values()]
	indexValue.forEach((i) => {
		if (i < minIndexNum) {
			minIndexNum = i
		}
	})
	let arr = [...m.entries()]
	arr.forEach((i) => {
		if (i[1] === minIndexNum) {
			resArr.push(list1[i[0]])
		}
	}) */
	//better
	let m = new Map()
	for (let i = 0; i < list1.length; i++) {
		m.set(list1[i], i)
	}
	let resArr = [],
		minIndexSum = 2000
	for (let i = 0; i < list2.length; i++) {
		if (m.has(list2[i])) {
			let j = m.get(list2[i])
			if (i + j > minIndexSum) {
				break
			}
			if (i + j < minIndexSum) {
				resArr.length = 0
				minIndexSum = i + j
				resArr.push(list2[i])
			} else if (i + j === minIndexSum) {
				resArr.push(list2[i])
			}
		}
	}
	return resArr
}

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
var list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"]
findRestaurant(list1, list2)
