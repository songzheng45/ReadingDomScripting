# 第4章 案例研究：JavaScript图片库

- onload 事件处理函数
页面加载时被调用的函数。

- element.childNodes 属性
返回包含元素的全部子元素的数组。该数组包含所有类型的节点，包括元素节点，甚至空格、换行符都会被解释为节点。    

- node.nodeType 属性
nodeType 属性值是数字，总共有12种可取值，仅有3种有实用价值：  
    - nodeType=1 是 **元素节点**
    - nodeType=2 是 **属性节点**
    - nodeType=3 是 **文本节点**

- node.nodeValue 属性
```html
<p id="description">Choose a picture</p>
```
执行 `document.getElementById('description').nodeValue` 会返回`null`值，因为这里实际上是要得到`description`的第一个子节点的`nodeValue`属性值：  
```javascript
document.getElementById('description')[0].nodeValue
```

- node.firstChild 属性
等价于 `node.childNodes[0]`

- node.lastChild 属性
等价于 `node.childNodes[node.childNodes.length - 1]`


>达成目标的过程与目标本身同样重要。

