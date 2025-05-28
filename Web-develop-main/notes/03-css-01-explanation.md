# 03-css-01.html 代码逐行解释

```html
<!DOCTYPE html>
```
- **`<!DOCTYPE html>`**: 这是文档类型声明 (Document Type Declaration, DTD)。它告诉浏览器这个页面是使用 HTML5 标准编写的。

```html
<html lang="zh">
```
- **`<html lang="zh">`**: 这是 HTML 文档的根元素。`lang="zh"` 属性指定了页面的主要语言是中文。

```html
  <head>
```
- **`<head>`**: 这个标签包含了文档的元数据（metadata），这些信息不会直接显示在页面上，但对浏览器和搜索引擎很重要。

```html
    <meta charset="UTF-8" />
```
- **`<meta charset="UTF-8">`**: 这个 `<meta>` 标签指定了文档使用的字符编码为 UTF-8。UTF-8 是一种通用的字符编码，可以支持世界上几乎所有的字符。

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- **`<meta name="viewport">`**: 这个 `<meta>` 标签用于配置视口（viewport），即用户在设备上可见的网页区域。
  - `width=device-width`: 设置视口的宽度等于设备的屏幕宽度。
  - `initial-scale=1.0`: 设置页面的初始缩放比例为 1.0，即不缩放。
  这对于响应式设计非常重要，确保页面在不同设备上都能良好显示。

```html
    <title>CSS练习</title>
```
- **`<title>`**: 这个标签定义了浏览器标签页上显示的标题，以及搜索引擎结果中显示的页面标题。

```html
    <!-- 外部样式表 -->
```
- **`<!-- 外部样式表 -->`**: 这是 HTML 注释，用于解释代码，不会被浏览器解析或显示。

```html
    <link rel="stylesheet" href="main.css" />
```
- **`<link rel="stylesheet" href="main.css">`**: 这个 `<link>` 标签用于链接外部资源。在这里，它链接了一个外部 CSS 样式表文件 `main.css`。
  - `rel="stylesheet"`: 指定链接的资源类型是样式表。
  - `href="main.css"`: 指定样式表文件的路径。

```html
    <!-- 内部样式表 -->
```
- **`<!-- 内部样式表 -->`**: HTML 注释。

```html
    <style>
```
- **`<style>`**: 这个标签用于在 HTML 文档内部定义 CSS 样式规则。

```css
      h1 {
        font-family: 楷体;
        color: brown;
      }
```
- **`h1 { ... }`**: 这是一个 CSS 规则，选择了所有的 `<h1>` 元素。
  - `font-family: 楷体;`: 将 `<h1>` 元素的字体设置为“楷体”。如果用户的系统没有安装楷体，浏览器会使用默认字体。
  - `color: brown;`: 将 `<h1>` 元素的文本颜色设置为棕色。

```css
      p {
        text-indent: 2em;
        line-height: 1.7;
      }
```
- **`p { ... }`**: 这是一个 CSS 规则，选择了所有的 `<p>` (段落) 元素。
  - `text-indent: 2em;`: 设置段落首行缩进 2 个字符的宽度 (`em` 是一个相对单位，通常等于当前元素的字体大小)。
  - `line-height: 1.7;`: 设置段落的行高为字体大小的 1.7 倍，增加了行与行之间的间距。

```css
      /* 类选择符 */
```
- **`/* 类选择符 */`**: 这是 CSS 注释。

```css
      .abstract {
        font-size: 14px;
      }
```
- **`.abstract { ... }`**: 这是一个类选择器，选择了所有 `class` 属性值为 `abstract` 的元素。
  - `font-size: 14px;`: 将这些元素的字体大小设置为 14 像素。

```css
      h2 {
        color: coral;
      }
```
- **`h2 { ... }`**: 这是一个 CSS 规则，选择了所有的 `<h2>` 元素。
  - `color: coral;`: 将 `<h2>` 元素的文本颜色设置为珊瑚色。

```css
      #CSSbase {
        color: darkgreen;
      }
```
- **`#CSSbase { ... }`**: 这是一个 ID 选择器，选择了 `id` 属性值为 `CSSbase` 的元素 (ID 在一个 HTML 文档中应该是唯一的)。
  - `color: darkgreen;`: 将该元素的文本颜色设置为深绿色。这个规则会覆盖上面 `h2` 的 `color: coral;` 规则，因为 ID 选择器的优先级高于类型选择器。

```css
      a:link {
        color: rgb(87, 87, 197);
      }
```
- **`a:link { ... }`**: 这是一个伪类选择器，选择了所有未被访问过的 `<a>` (链接) 元素。
  - `color: rgb(87, 87, 197);`: 将这些链接的文本颜色设置为 RGB 值为 (87, 87, 197) 的蓝色。

```css
      a:visited {
        color: darkgrey;
      }
```
- **`a:visited { ... }`**: 这是一个伪类选择器，选择了所有已被访问过的 `<a>` (链接) 元素。
  - `color: darkgrey;`: 将这些链接的文本颜色设置为深灰色。

```html
    </style>
  </head>
```
- **`</style>`**: 结束内部样式表定义。
- **`</head>`**: 结束 `<head>` 部分。

```html
  <body>
```
- **`<body>`**: 这个标签包含了页面的所有可见内容，如文本、图片、链接、表格等。

```html
    <!-- 内嵌样式表 -->
```
- **`<!-- 内嵌样式表 -->`**: HTML 注释。

```html
    <h1 style="color: darkblue">CSS练习</h1>
```
- **`<h1 style="color: darkblue">`**: 这是一个 `<h1>` 元素。
  - `style="color: darkblue"`: 这是内联样式 (Inline Style)。直接在 HTML 元素的 `style` 属性中定义 CSS 规则。
  - `color: darkblue;`: 将这个特定 `<h1>` 元素的文本颜色设置为深蓝色。内联样式的优先级最高，它会覆盖掉内部样式表和外部样式表中对 `<h1>` 颜色的定义 (即 `color: brown;`)。

```html
    <h2 id="CSSbase">CSS语法基础</h2>
```
- **`<h2 id="CSSbase">`**: 这是一个 `<h2>` 元素，其 `id` 属性为 `CSSbase`。因此，它会应用 `#CSSbase` 选择器定义的样式 (颜色为深绿色)，而不是 `h2` 类型选择器定义的样式 (颜色为珊瑚色)。

```html
    <p class="abstract">
      这是一个段落...
    </p>
```
- **`<p class="abstract">`**: 这是一个段落元素，其 `class` 属性为 `abstract`。它会应用 `p` 类型选择器定义的样式 (首行缩进、行高) 和 `.abstract` 类选择器定义的样式 (字体大小 14px)。

```html
    <p>
      这是一个段落...
    </p>
```
- **`<p>`**: 这是一个普通的段落元素。它会应用 `p` 类型选择器定义的样式 (首行缩进、行高)。

```html
    <h2>选择符</h2>
```
- **`<h2>`**: 这是一个 `<h2>` 元素。它会应用 `h2` 类型选择器定义的样式 (颜色为珊瑚色)。

```html
    <p>
      这是一个段落，段落中包<a href="https://yangzh.cn">含了一个这是一个段落</a
      >，段落中包含了一个这是一个段落，段落中包含了一个<a href="https://www.sanguo.com"
        >这是一个段落</a>，段落中包含了一个
    </p>
```
- **`<p>...</p>`**: 这是一个段落元素，应用 `p` 类型选择器的样式。
- **`<a href="https://yangzh.cn">...</a>`**: 这是一个超链接元素。
  - `href="https://yangzh.cn"`: 指定链接的目标 URL。
  - 其文本颜色会根据是否被访问过，应用 `a:link` 或 `a:visited` 的样式。
- **`<a href="https://www.sanguo.com">...</a>`**: 同上，另一个超链接。

```html
  </body>
</html>
```
- **`</body>`**: 结束 `<body>` 部分。
- **`</html>`**: 结束 HTML 文档。

## CSS 优先级总结 (此文件示例)

1.  **内联样式 (Inline Style)**: `style="..."` 优先级最高。 (示例: `<h1 style="color: darkblue">`)
2.  **ID 选择器**: `#CSSbase` 优先级次之。 (示例: `<h2 id="CSSbase">` 应用了 `color: darkgreen;`)
3.  **类选择器 / 伪类选择器**: `.abstract`, `a:link`, `a:visited` 优先级低于 ID 选择器。 (示例: `<p class="abstract">` 应用了 `font-size: 14px;`)
4.  **类型选择器 (标签选择器)**: `h1`, `p`, `h2` 优先级最低。 (示例: 普通 `<h2>` 应用了 `color: coral;`)

**注意**: 外部样式表 (`main.css`) 中的规则也会参与优先级的计算，其优先级取决于选择器的类型以及它在 `<head>` 中被引入的位置（后面的会覆盖前面的同级规则）。此分析仅基于 `03-css-01.html` 文件内部的样式。