# bun-demo

bun官网：[https://bun.sh/](bun官网)

window下载方式，通过命令行，打开cmd或powershell

```bash
powershell -c"irm bun.sh/install.ps1 | iex"
```

linux或mac下载方式

```bash
curl -fsSL https://bun.sh/install | bash
```

安装包方式，可以适配大部分node包

```bash
bun install 
```

bun可以直接运行ts文件，通过第三方打包工具运行

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
