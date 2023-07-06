---
id: template
sidebar_position: 3
description: Create a doc page with rich content.
---

# Template


## 介绍

这是一个模板，用于创建一个带有丰富内容的文档页面。

你在新建一个文档页面时，可以复制这个模板，然后根据自己的需要进行修改。

注意的是需要递增sidebar_position，以便在侧边栏中正确排序。

还有需要修改id，以便在链接中正确引用。

### Markdown语法

Markdown语法请参考[Markdown Guide](https://www.markdownguide.org/basic-syntax/)。

还有Docusaurus的Markdown扩展语法请参考[Markdown Features](https://docusaurus.io/docs/markdown-features)。

## 示例

### 代码块

```rust title="/src/main.rs" showLineNumbers
fn main() {
    println!("Hello, world!");
}
```

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
