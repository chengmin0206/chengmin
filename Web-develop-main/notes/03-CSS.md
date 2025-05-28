# 03-CSS

## CSS概念

CSS(Cascading Style Sheets)层级样式表，用以控制页面样式，实现页面中元素的表现形式、区块的布局、不同设备的适应等等，是 Web 标准中实现内容和表现相分离的唯一机制。

## 三种使用CSS的方式

1. 外部 link
2. 内部 style
3. 内嵌 style

## CSS語法

语法声明分成两类：at 规则 (at-rules) 和 CSS 规则集 (rule sets)。

### @rules

At 规则以“`@`​”关键字开始，之后紧跟标志符。比如：“`@media`​”。

```css
@media (max-width: 767px) {
    h4 {
        margin-top: 1em
    }
}
```

關鍵字的意義見下表：

‍

### CSS 規則集

规则集，也称规则，由选择符和跟随其后的声明块组成。声明块以“`{`​”开始，以“`}`​”结束，其中的声明以“`;`​”分隔。声明由属性名称和属性值组成，属性名称和属性值之间用“`:`​”连接。

```css
      h1 {
        font-family: 楷体;
        color: brown;
      }
```

### CSS 注释

在 CSS 中，注释以“`/*`​”开始，以“`*/`​”结束，注释之内的内容会被浏览器忽略。注释不能嵌套使用。

## CSS 選擇符

### 分類

1. 簡單選擇符
2. 偽元素選擇符
3. 組合選擇符
4. 群組選擇符

### 简单选择符

#### 类型选择符

类型选择符（Type Selector），也叫做元素选择符，该选择符能代表文档树中的所有指定的元素。

```css
h1 {color:red}
```

上述规则将使文档中所有的 `h1`​ 元素字体颜色为红色。

#### 属性选择符

属性选择符（Attribute Selector）将选定那些拥有匹配属性的元素。

#### 类选择符

类选择符（Class Selector）将选择那些 `class`​ 属性值为指定值的元素。

```css
.bar        /*将选择所有具有 class="bar"属性及值的元素*/h1.bar      /*将选择具有 class="bar"的所有 h1 元素*/.bar.foo    /*将选择 class 值中同时包含 bar、foo 的元素*/
```

带有元素名称的类选择符和使用 `class`​ 属性的属性选择符是等价的。如 `div.value`​ 就等同于 `div[class~=value]`​。

#### ID 选择符

ID 选择符（ID Selector）将选择 `ID`​ 属性等于指定值的元素。按照 W3C 标准，`ID`​ 属性在 `DOM`​ 中的值应该是唯一的。

#### 简单选择符之伪类选择符

浏览器通常会将未访问的超级链接和访问过的超级链接加以区分，CSS 提供了：link 和：visited 链接伪类选择符用以区别它们。

1.  **:link** :link 伪类将应用于那些没有被访问过的内容。
2.  **:visited** :visited 伪类将应用于那些已经被访问过的内容。

## 文本样式

### 设定字体

font-family

### 字体倾斜

font-style: italic;

### 字体粗细

font-weight: 100 -900，前提条件是字体支持。

![image](assets/image-20250319101311-y4wwxij.png)

### 字体大小

font-size

### 行间距

line-height

### 颜色

color

### 字符间距

​`letter-spacing`​

### 首行缩进

text-indent

### 对齐方式

text-align

### 文本装饰

text-decoration

#### 文字阴影

text-shadow

‍
