# 第3章 DOM

什么是DOM？  
- D ： 代表 document - 文档对象，DOM 将一个网页文档转换为文档对象。
- O ： 代表 object - 对象。JavaScript 中有*用户定义对象*、*内建对象*和*宿主对象*三种类型的对象。  
- M ： 代表 Model - 模型。  
DOM 用树表示网页文档，使用 parent、child、sibling 等表示元素之间的关系。


## 节点

DOM 中的节点类型： `元素节点`、`文本节点`和`属性节点`。

### 获取元素
1. getElementById(id)
2. getElementsByTagName(tagName)
3. getElementsByClassName(className)
`getElementsByClassName` 是 HTML5 DOM 中新增的方法。

## 获取和设置属性
1. object.getAttribute(attribute)
2. object.setAttribute(attribute)
判断数据是否存在（即是否为null）的精简判断：  
```javascript
if (something) {
    // something 存在
}
```

DOM 的工作模式：动态刷新网页文档的内容，却不用刷新浏览器中的页面。