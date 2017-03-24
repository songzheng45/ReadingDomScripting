## 函数
`函数（function）`是一组允许在代码里随时调用的语句，每个函数都是一个短小的脚本。

JavaScript提供了很多内建函数，例如 alert。

### 函数的定义和调用
应该先定义函数，再调用它们。
```javascript
// 定义函数
function shout() {
    var beatles = Array('John','Paul');
    for (var count = 0; count < beatles.length; count++) {
        document.write(beatles[count]);
    }
}

// 调用
shout()
```

### 函数的参数
```javascript
function name(arguments) {
    statements;
}
```
例如：
```javascript
function convertToCelsius(temp) {
    var result = temp -32;
    result = result / 1.8;
    return result;
}
```


### 函数作为数据类型
我们还可以把函数作为一种数据类型来使用，这时可以把函数的调用结果赋给一个变量：
```javascript
var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
```

### 变量的作用域
变量的作用域可以是**全局**和**局部**的。  
`全局变量（global variable）`的作用域是整个脚本，一旦声明一个全局变量，它可以在脚本的任何位置被引用。  
`局部变量（local variable）`的作用域仅限于某个特定的函数的内部，在函数外部是无法引用它的。  
要使用`var`关键字明确地为函数变量设定作用域。  
使用`var`限定的变量被视为局部变量，只存在于函数的上下文中；反之，没有使用`var`则被视为一个全局变量，如果已经存在一个同名的全局变量，这个函数就会修改这个全局变量的值。
```javascript
function square(num) {
    total = num * num;
    return total;
}
var total = 50;
var number = square(20);
alert(total);   // total = 400
```
上述示例中，全局变量 total 的值在函数内部被改变了。该函数正确的定义如下：  
```javascript
function square(num) {
    var total = num * num;
    return total;
}
```

应该总是在函数里使用`var`关键字定义变量，来避免任何形式的二义性隐患。

