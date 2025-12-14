# Extension Host Restart

一个简洁实用的 VS Code 插件，在状态栏右下角提供快速重启 Extension Host 的按钮。

## 📖 项目简介

在 VS Code 开发过程中，有时需要重启 Extension Host（扩展宿主进程）来重新加载所有扩展。这个插件提供了一个便捷的状态栏按钮，让你可以一键完成这个操作。

### 功能特性

- 🔄 **一键重启**：在状态栏右下角显示重启按钮
- ⚠️ **安全确认**：点击后弹出确认对话框，防止误操作
- 🚀 **轻量高效**：插件体积小，对 VS Code 性能几乎无影响

## 🛠️ 开发环境

### 前置要求

- [Node.js](https://nodejs.org/) >= 16.x
- [VS Code](https://code.visualstudio.com/) >= 1.74.0
- npm 或 yarn

### 安装依赖

```bash
# 克隆项目后进入目录
cd extension-host

# 安装依赖
npm install
```

## 🔧 开发

### 编译项目

```bash
# 一次性编译
npm run compile

# 监听模式（开发时推荐）
npm run watch
```

### 项目结构

```
extension-host/
├── .vscode/
│   ├── launch.json      # 调试配置
│   └── tasks.json       # 任务配置
├── src/
│   └── extension.ts     # 插件核心代码
├── out/                 # 编译输出目录
├── package.json         # 插件配置和元数据
├── tsconfig.json        # TypeScript 配置
├── .gitignore           # Git 忽略配置
└── .vscodeignore        # 打包忽略配置
```

## 🐛 调试

1. 在 VS Code 中打开项目文件夹
2. 按 **F5** 或点击左侧「运行和调试」面板的启动按钮
3. 会启动一个新的 VS Code 窗口（扩展开发宿主）
4. 在新窗口的状态栏右下角可以看到「🔄 重启扩展」按钮
5. 点击按钮测试功能

### 调试技巧

- 修改代码后，在调试窗口按 `Cmd + R`（Mac）或 `Ctrl + R`（Windows/Linux）可重新加载扩展
- 在 `extension.ts` 中设置断点可以调试代码逻辑
- 使用 `console.log()` 输出的内容会显示在「调试控制台」面板

## 📦 打包

### 安装打包工具

```bash
npm install -g @vscode/vsce
```

### 打包为 VSIX 文件

```bash
vsce package
```

执行后会在项目根目录生成 `extension-host-restart-1.0.0.vsix` 文件。

### 本地安装 VSIX

1. 打开 VS Code
2. 进入扩展面板（`Cmd + Shift + X` 或 `Ctrl + Shift + X`）
3. 点击右上角 `⋯` 菜单
4. 选择「从 VSIX 安装...」
5. 选择生成的 `.vsix` 文件

## 🚀 发布到插件市场

### 前置准备

1. 在 [Azure DevOps](https://dev.azure.com/) 创建组织
2. 获取 Personal Access Token (PAT)
3. 创建发布者账号

### 发布命令

```bash
# 登录
vsce login huangzt

# 发布
vsce publish
```

### 更新版本

```bash
# 更新补丁版本 (1.0.0 -> 1.0.1)
vsce publish patch

# 更新次版本 (1.0.0 -> 1.1.0)
vsce publish minor

# 更新主版本 (1.0.0 -> 2.0.0)
vsce publish major
```

## 📝 使用说明

安装插件后，在 VS Code 状态栏右下角会显示「🔄 重启扩展」按钮：

1. 点击按钮
2. 在弹出的确认对话框中点击「确定」
3. Extension Host 将重新启动，所有扩展重新加载

## 📄 许可证

MIT License

## 👤 作者

**huangzt**

---

如有问题或建议，欢迎提交 Issue！
