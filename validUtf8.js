/** leetcode no.393
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
	//将data转为8位二进制
	const utf8 = data.map((i) => {
		return i.toString(2).padStart(8, "0")
	})
	for (let i = 0; i < utf8.length; ) {
		let n = 0,
			count = 0
		//计算开头的1
		while (n < 8) {
			let s = utf8[i]
			if (s[n] === "1") {
				count++
			}
			if (s[n] === "0") {
				break
			}
			n++
		}
		if (count === 0) {
			i++
			continue
		}
		if (count === 1 || count > 4 || i + count - 1 > utf8.length) {
			return false
		}
		for (let j = i + 1; j < i + count; j++) {
			let s = utf8[j]
			if (s[0] !== "1" || s[1] !== "0") {
				return false
			}
		}
		i += count
	}
	return true
}

console.log(validUtf8([197, 130, 1]))
console.log(validUtf8([235, 140, 4]))
console.log(validUtf8([240, 162, 138, 147, 17]))
console.log(validUtf8([115, 100, 102, 231, 154, 132, 13, 10]))
