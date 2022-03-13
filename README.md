# 每日力扣

如题

## 3.13

题号：**[393.UTF-8编码验证](https://leetcode-cn.com/problems/utf-8-validation/)**

1.1字节的UTF-8字符为

```
0xxxxxxx
```

2.2字节的UTF-8字符为

- 第一个字节前n位为1，第n+1位为0
- 除第一个字节外的每个字节，前2位为10

```
110xxxxx 10xxxxxx
```

输入：一个数组，每一项是一个整数，表示一个字节的数据。

输出：该数组是否为有效的UTF-8编码

要做的事：

- 把整数转换成8位有效二进制 ->可替代方法：使用位运算得出第一位的值

  ```
  data[i].toString(2).padStart(8, '0')
  ```

- 判断该整数是1字节还是多字节以及是否合法 

  ```
  while(n<8){
  	let s = data[i]
  	if(s[n++]==='1'){
  		count++
  	}
  	if (s[n] === "0") {
  		break
  	}
  }
  count=0，跳过这个数
  count>4，不合法
  count=1且是开头的数,不合法
  for(let j = i+1;j < i+count; j++){
  	let s = data[j]
  	if(s[0]!=='1'||s[1]!=='0')
  		不合法
  }
  ```

  



