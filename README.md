# 程一鸣 · Yiming Cheng

专业、简洁的中英双语个人学术与职业网站。内容依据提供的 PDF 简历整理，包含 About、Education、Professional Experience、Research Projects、Skills 和 Contact。

## 本地运行

需要 **Node.js 20 或更高版本**。无第三方依赖，无需 `npm install`。

```sh
cd /workspace/personal-website
npm run dev
```

在自己的运行机器上访问 `http://localhost:3000`。可通过 `PORT=3001 npm run dev` 更换端口。云环境需要使用其支持的端口访问方式；目前没有部署或公开发布。

## 构建与检查产物

```sh
npm run build
npm run preview
```

构建输出到 `dist/`，预览仍使用 3000 端口。运行预览前先停止同端口的开发服务（Ctrl+C），或使用 `PORT=3001 npm run preview`。

## 内容与设计

- 原生 HTML、CSS、JavaScript，无框架、打包器、外部字体或追踪脚本。
- 默认中文，可切换英文；语言偏好存储于浏览器本地，不上传任何数据。
- 响应式导航、当前章节标识、可展开的工作与项目详情、邮件/电话链接、邮箱复制、键盘焦点及减少动画偏好支持。
- `app.js`：`content.zh` 和 `content.en` 为双语内容；修改经历时同步更新两个版本。邮箱与电话同时用于页面展示、联系链接和复制功能，修改时需一并替换。
- `styles.css`：颜色变量、字体、布局、响应式断点及打印样式。
- `index.html`：页面入口、静态元信息与无 JavaScript 时的联系提示。
- `scripts/serve.mjs`：本地静态服务器。`scripts/build.mjs`：复制发布所需文件至 `dist/`。

## 内容边界

经历、日期及数字均取自简历，英文为对应翻译。没有添加论文、奖项、个人照片、社交账户或未提供的研究成果。博士项目呈现为“在读”，不暗示已取得学位。研究项目明确保留研究助理角色。

简历中的“12 月 18 日起可到岗 / 每周 5 天 / 3 个月以上”具有时效性且未注明年份，因此未作为网站当前状态展示。原始 PDF 不包含在网站或构建产物中，网站仅展示简历中的邮箱与电话。未来正式上线前可自行决定是否保留电话。

## Vercel（仅配置，尚未部署）

已包含 `vercel.json`：Framework Preset 选择 **Other**，Build Command 为 `npm run build`，Output Directory 为 `dist`。不需要环境变量、数据库或密钥。

用户明确授权部署后，才连接仓库并执行部署。本次仅完成代码和本地验证，没有执行 Vercel 部署、推送远程或公开发布。

## 已验证

在当前云环境的 Chromium 中验证了双语渲染与语言持久化、六个内容章节及简历条目、项目展开、邮箱复制、手机菜单及 Escape 关闭、邮箱与电话链接，并检查了 320、375、390、768、1024、1440 像素宽度下的双语水平溢出。静态构建和 JavaScript 语法检查通过。
