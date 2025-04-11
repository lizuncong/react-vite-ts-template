# React + TypeScript + Vite

React + TypeScript + Vite + React Router + React Redux项目脚手架模版。

- 很好的集成了Code Lint周边工具，支持对TS，CSS，LESS等文件的自动格式化。
- 支持PC 和 H5
- 内置目录结构

## 一、环境

- node: >=20.0.0

## 二、运行

- npm install
- npm run dev

## 三、Code Lint配置及介绍

在开始介绍Code Lint配置前，需要准备以下工作：

需要在vscode安装以下插件：

- eslint
- prettier
- editorconfig
- Stylelint

code lint相关工具及其作用

- eslint。负责规范并校验js代码的编写。
- commit lint。负责校验commit msg是否符合规范
- stylint。负责规范并校验css/scss/less 代码的编写。
- prettier
- editor config。确保大家编辑器的风格统一，比如空格啥的。确保编辑器安装了editorconfig插件，比如vscode需要安装EditorConfig
- lint stage
- husky

### 3.1 vscode 配置

在项目根目录下创建./vscode/settings.json，并配置保存代码自动格式化的能力。同时这份文件需要提交上去，确保团队基础配置统一。
