# 库开发 + 文档生成项目模板

## 项目结构

- public/docs : markdown 文档
- src/tools : 库项目
  
## 文档结构

三个 \*\*\* 作为标题标识

\[\[\]\] 作为代码实例连接地址标识

需要保证 public/docs 中的文件名 与 tools/src 中的文件名一致，则会出现源代码展示

```
*** useBind ***
[[https://codesandbox.io/embed/blissful-water-ytss8?fontsize=14&hidenavigation=1&theme=dark]]

> 以下输入 api 说明
```