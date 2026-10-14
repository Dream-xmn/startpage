# Dream 的起始页

我每天用的个人主页：搜索、待办、常用链接。

在线地址（开启 GitHub Pages 之后）：https://dream-xmn.github.io/startpage/

## 里面有什么
- 百度和 Google 搜索
- 今日待办（存在这台电脑的浏览器里）
- 学习通、ergouzi 文档、GitHub

## 本地打开
双击 index.html，或把文件拖进浏览器。

## 怎么改
- 改链接：编辑 index.html 里的 a href
- 待办：在页面上添加即可
- 搜索逻辑在 app.js

git add .
git commit -m "update startpage"
git push

## 发布到 GitHub Pages
1. 推到 GitHub，仓库名用 startpage
2. Settings -> Pages
3. Source 选 Deploy from a branch
4. Branch 选 main，文件夹选 / (root)
5. 打开 https://dream-xmn.github.io/startpage/
