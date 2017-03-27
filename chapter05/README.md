# 第5章 最佳实践

>本章内容  
>- 平稳退化：确保网页在没有JavaScript的情况下也能正常工作
>- 分离JavaScript：把网页的结构和内容与JavaScript脚本的动作行为分开
>- 向后兼容性：确保老版本的浏览器不会因为你的JavaScript而死掉
>- 性能考虑：确保脚本执行的性能最优

## 平稳退化
```javascript
window.open(url,name,features)
```
- url : 要在新窗口打开的网页的URL地址
- name : 新窗口的名字。可以在代码中使用这个名字与新窗口通信
- features : 以逗号分割的字符串，包含新窗口的各种属性，包括尺寸、是否显示工具条、菜单条、初始显示位置等等。新窗口的浏览功能要少而精。  
示例：
```javascript
function popup(winURL){
    window.open(winURL,'popup','width=320,height=480')
}
```

### "javascript:"伪协议
真协议如HTTP协议，FTP协议，用来在因特网上的计算机之间传输数据包。  
伪协议则是一种非标准化的协议。"javascript:"伪协议可以通过一个链接来调用 JavaScript 函数。
```javascript
<a href="javascript:popup('http://www.example.com');">Example</a>
```

>使用"javascript:"伪协议调用JavaScript代码的做法非常不好。

### 内嵌的事件处理函数
```html
<a href="#" onclick="popup('http://www.example.com'); return false;">Example</a>
```
和伪协议一样糟糕，因为都不能平稳退化，当禁用浏览器的JavaScript功能，这样的链接将毫无用处。

### 谁关心这个
搜索引擎。  
如果JavaScript不能平稳退化，可能会影响在搜索引擎上的排名。   
优化后的代码：
```javascript
<a href="http://www.example.com" onclick="popup(this.href); return false;">Example</a>
```
这样即使JavaScript被禁用，这个链接也是可用的。

## 渐进增强
>向CSS学习：CSS最大的有点是，将Web文档的HTML标记和样式分离开来。  

JavaScript中将事件添加到HTML某个元素上：
```javascript
window.onload = prepareLinks;

function prepareLiniks(){
    element.event = action...
}
```

## 向后兼容
某些古老的浏览器可能无法理解DOM提供的方法和属性。  

### 对象检测
```javascript
if (method) {
    statements
}
```
示例：
```javascript
if (!document.getElementById || !document.getElementsByTagName) {
    return false;
}
```
这段代码的含义是，如果浏览器不支持`getElementById`或`getElementsByTagName`方法，则停止向下执行。  
注意：使用对象检测时，一定要删除方法名后面的圆括号。

## 性能考虑

### 尽量少访问 DOM 和尽量减少标记
