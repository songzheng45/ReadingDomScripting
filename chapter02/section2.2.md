## 2.2 语法

### 语句
建议每条语句占一行，并且以`;`结尾，这是一个良好的编程习惯。

### 注释
注释是供自己或他人参考的信息，帮助读代码的人了解代码的流程。

JavaScript解释器不会解释注释语句。

**示例1：单行注释**  
```
// 自我提醒：
// 有注释是好事
```
**示例2：多行注释**  
```
/* 这是
    多行注释 */
```

### 变量
变量：会发生变化的东西。  
赋值：把值存入变量的操作叫赋值。  

赋值的例子：
```javascript
mood = "happy";
age = 33;
```
JavaScript允许直接对变量赋值而无需事先声明，但是提前声明变量是一个好习惯。

**声明变量：**  
```javascript
var mood; 
var age;
```
或
```javascript
// 一条语句一次声明多个变量
var mood, age;
```
或
```javascript
// 声明和赋值同时进行
var mood = "happy";
var age = 33;
```
或
```javascript
// 声明和赋值同时进行
var mood = "happy", age = 33;
```

JavaScript中的变量名区分大小写，例如变量`mood`和`MOOD`和`mOOd`不是同一个变量。

下划线（`-`）式命名：`var my_mood = "happy";`  
驼峰式命名：`var myMood = "happy";`  
通常`函数名`、`方法名`和`对象属性名`使用`驼峰式命名`。  


### 数据类型
JavaScript是弱类型语言，可以在任何阶段改变变量的数据类型。
```javascript
var age = "thirty three";
age = 33;
```

JavaScript中最重要的几种数据类型。
1. 字符串
字符串由零个或多个字符构成，包括（但不限于）字母、数字、标点符号和空格。字符串必须包含在引号里，单引号或双引号都可以。  
如果字符串包含双引号，就把整个字符串放在单引号里；如果字符串包含单引号，则把整个字符串放在双引号里：  
```javascript
var mood = "dot't ask";
```
上面这条语句如果想使用单引号，则要用转义符反斜线对字符进行转义：
```javascript
var mood = 'dot\'t ask';
```

好的编程习惯：不管选择双引号还是单引号，请在整个脚本中保持一致。

2. 数值
JavaScript中的数值可以是整数、浮点数（允许任意位小数）。
```javascript
var age = 33.25;
age = -20;
age = -20.33333333
```

3. 布尔值
布尔（boolean）类型只有两个可选值-- `true`或`false`。


### 数组
字符串、数值和布尔值都是标量（scalar），即这些类型的变量在任意时刻只能有一个值。  
想用一个变量存储一组值，需要使用`数组`。
**声明数组：**  
```javascript
var beatles = Array(4);     // 声明一个长度为4的数组
var beatles1 = Array();     // 声明一个长度不确定的数组
```

填充数组时，需要给出新元素的值和新元素在数组中的下标（index）。

**示例1：声明后填充数组**
```javascript
var beatles = Array(4);     // 声明一个长度为4的数组
beatles[0] = "John";        // 在数组下标为0的位置存入"John"
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";
```
**示例2：声明时填充数组**
```javascript
var beatles = Array("John","Paul","George","Ringo");
```
或
```javascript
var beatles = ["John","Paul","George","Ringo"];
```
使用这样的方式声明数组时，会为每个元素自动分配下标，默认下标从0开始的整数数字。

**示例3：数组元素是其他的数组**
数组的元素可以是任意类型，甚至可以是其他的数组。
```javascript
var lennon = ["John",1940,false];
var beatles = [];
beatles[0] = lennon;    // 数组的第一个元素是另外一个数组
                        // beatles[0][0]的值是"John"
                        // beatles[0][1]的值是1940
                        // beatles[0][2]的值是false
```
**示例4：关联数组**  
用字符串作为数组的下标，这样的数组叫作**关联数组**。  
不推荐。


### 对象
对象使用一个名字表示一组值，每个值都是对象的一个属性。 
使用对象可以避免在数组中使用下标来获取对象 ，提高可读性。  
创建对象使用 **Object** 关键字，使用`.`获取属性。  
创建对象的方式有：  
```javascript
var lenon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;
```
或
```javascript
var lenon = {
    name : "John",
    year : 1940,
    living : false
};
```
