## 对象

对象（object）是一种非常重要的数据类型，它是自包含的数据集合，其中数据有两种形式：**属性（property）**和**方法（method）**。
- 属性是隶属于某个特定对象的的变量；
- 方法是只有某个特定对象才能调用的函数
对象就是由一些属性和方法组合而成的一个数据实体。  
在JavaScript中使用“点”语法来访问：  
```javascript
Object.property
Object.method()
```

**实例**是对象的具体个体，使用`new`关键字创建一个新实例：  
```javascript
var jeremy = new Person;
```

### 内建对象
**内建对象**是一系列 JavaScript 预定义的对象。
- Array
    - length ：数组的元素个数
- Math
    - round() ： 把十进制数舍入为一个与之最接近的整数
- Date

### 宿主对象
**宿主对象**不是由 JavaScript 语言本身而是由运行环境提供的，如浏览器。
宿主对象包括`Form`、`Image`、`Element`等，但是本书不介绍。  
本书主要介绍`Document`对象的属性和方法。