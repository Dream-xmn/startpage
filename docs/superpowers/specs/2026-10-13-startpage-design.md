# 个人起始页设计

日期：2026-10-13  
仓库名：`startpage`  
作者：Dream-xmn

## 目标

做一个给自己每天用的个人起始页：浏览器打开就能点到常用链接。  
同时用这个项目学会 GitHub 的基本流程：建仓库、提交、推送、写 README、用 GitHub Pages 发布成可打开的网址。

成功标准：

- 本地打开 `index.html` 能看到页面
- GitHub 上有公开仓库和 README
- GitHub Pages 链接能打开同一页面
- 能独立改一个链接并 `commit` / `push`，刷新后网页更新

## 非目标（第一版不做）

- 登录、账号、数据库
- AI、自动打卡、后端服务
- 手机 App
- 别人可在网页上直接改内容的后台

今日备注写在页面文件里。要换一句话，就改文件再提交。

## 页面

只有一页。

- 顶部：名字 + 一句介绍，例如「Dream 的起始页」
- 三组链接：学习、工具、我的项目
- 一句今日备注
- 底部：指向本仓库

第一批链接：

- 学习：GitHub 主页、`python-ai-notes`
- 工具：2–3 个占位，由你之后改成学校 / AI / 常用站
- 我的项目：本起始页仓库；以后再加新项目

## 仓库结构

```
startpage/
  index.html
  styles.css
  README.md
  docs/superpowers/specs/2026-10-13-startpage-design.md
```

公开仓库。GitHub Pages 从 `main` 分支根目录发布。

改内容的固定流程：改文件 → `git add` → `git commit` → `git push` → 刷新 Pages。

## 实现约束

- 只用 HTML 和 CSS，第一版不写 JavaScript、不引外部框架
- 样式简单清楚，适合每天打开，不做复杂动画
- README 用中文，写清：这是什么、怎么本地打开、怎么发布、怎么改链接

## 验收

- [ ] 本地用浏览器打开 `index.html` 正常
- [ ] README 能让以后的自己看懂怎么改
- [ ] 推到 GitHub 后 Pages 网址可访问
- [ ] 改一个链接并推送后，线上页面跟着变
