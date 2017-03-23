## 条件语句
**语法：**
```javascript
if (condition) {
    statements;
} else {
    statements;
}
```

### 比较操作符
- 大于（>）
- 小于（<）
- 大于等于（>=）
- 小于等于（<=）
- 等于（==）和不等于（!=）
`==`不表示严格相等。例如`false==""`的结果就是`true`，因为操作符`==`认为空字符串与false的含义相同。
- === 和 (!===)
严格比较，同时比较值和变量的类型。


### 逻辑操作符
1. 逻辑与操作符（&&）
只要有一个操作数是 false，结果就为 false。当两个操作数都为 true 时，结果才为 true。
```javascript
if (condition1 && condition2) {
    statements;
}
```
2. 逻辑或操作符（||）
只要有一个操作数是true，结果就为true。当两个操作数都为false时，结果才为false。
```javascript
if (condition1 || condition2) {
    statements;
}
```
3. 逻辑非操作符（!）
只能作用于单个操作数，结果是将操作数返回的 Boolean 值取反。
```javascript
if (!(1 > 2))) {
    // ......
}
```