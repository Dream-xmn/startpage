# Dream 的起始页

这是我的个人起始页：打开就能点到常用链接。

在线地址（开启 GitHub Pages 之后）：

https://dream-xmn.github.io/startpage/

## 本地打开

1. 进入这个文件夹
2. 双击 `index.html`，或把文件拖进浏览器

## 怎么改链接

编辑 `index.html`。

- 今日备注：改「今日备注」下面那句话
- 常用链接：改每个 `<a href="...">` 的地址和文字
- 工具分组里现在是占位链接，把 `#` 换成你真正要用的网址

改完后提交并推送：

```bash
git add index.html
git commit -m "update startpage links"
git push
```

等一两分钟，刷新 GitHub Pages 就能看到更新。

## 发布到 GitHub Pages

1. 把这个仓库推到 GitHub，仓库名用 `startpage`
2. 打开仓库 Settings → Pages
3. Source 选 `Deploy from a branch`
4. Branch 选 `main`，文件夹选 `/ (root)`
5. 保存后打开 `https://dream-xmn.github.io/startpage/`
