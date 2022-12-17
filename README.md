<h1>PLSTRD.Plastraded 🌱🌱</h1>
<h3>——— A Platform where to advocate plastic reusability.</h3>

<br />

![img](https://github.com/NMF-earth/nmf-app/workflows/Test%20CI/badge.svg)[![Depfu](https://camo.githubusercontent.com/ae91251bd2768ee3976053d90c695f4b0e511b102649b7834e48d50afb780acc/68747470733a2f2f6261646765732e64657066752e636f6d2f6261646765732f66336230366338313932303262616632613134623332343163626632343963392f6f766572766965772e737667)](https://depfu.com/repos/github/NotMyFaultEarth/nmf-app?project_id=10243) [![Contributor Covenant](https://camo.githubusercontent.com/7d620efaa3eac1c5b060ece5d6aacfcc8b81a74a04d05cd0398689c01c4463bb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f6e7472696275746f72253230436f76656e616e742d76322e3025323061646f707465642d6666363962342e737667)](https://github.com/NMF-earth/nmf-app/blob/main/code_of_conduct.md) [![Build Status](https://camo.githubusercontent.com/deb01e63fe3309b210e35e1f4d964aeee19b400b37daadb921b0b69788ebb6a7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76312e7376673f6c6162656c3d43534c266d6573736167653d736f667477617265253230616761696e7374253230636c696d6174652532306368616e676526636f6c6f723d677265656e3f7374796c653d666c6174266c6f676f3d676974687562)](https://github.com/climate-strike/license) [![runs with expo](https://camo.githubusercontent.com/9490e2517a9fe5bdd4d157c5c0bb1b24e19e5082fbc10a4f310360b86dfd5e44/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52756e73253230776974682532304578706f2d3030302e7376673f7374796c653d666c61742d737175617265266c6f676f3d4558504f266c6162656c436f6c6f723d663366336633266c6f676f436f6c6f723d303030)](https://expo.io/)



### 📖 About

这是一个缓慢成长的项目，主要目标为促进塑料用品的循环使用，减少碳排，提高资源利用率。同时探索塑料资源的新消费模式。最终愿景希望探索出一套软件 + 硬件交互的众包环保方案 ：

- 软件：将上传照片信息 & 无人机/红外视觉识别等图像元数据提交由机器学习模型后端处理，最优化配置收集-处理流程方案
- 硬件：建立社区点普及荷兰 [Precious Plastic 开源项目](https://preciousplastic.com/)的塑料处理与循环机械



### 📊 Data source

碳排放计算数据参考于 [carbon footprint repo](https://github.com/NMF-earth/carbon-footprint) 

二维码扫描功能调用了 [Open Food Facts](https://world.openfoodfacts.org/) API.



### 📦 Getting started

Installing Dependencies:

```
$ yarn
```

Running the app:

```
$ yarn start
```

For starting the app on a specific OS:

```
$ yarn ios | yarn android
```

Copy the 2 files that contain secrets and replace them with yours

```
$ cp app.example.json app.json
$ cp secret.example.ts secret.ts
```



### 👩🏾‍💻 Development

- Eslint is used in the project to enforce code style and should be configured in your [editor](https://eslint.org/docs/user-guide/integrations).
- Prettier is also used and apply automatically by eslint
- Typescript is used in the project for type-checking and should be configured in your [editor](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support).

You can check this manually by running:

```
$ yarn lint
```

or

```
$ yarn typescript
```

You can ask eslint to fix issues by running:

```
$ yarn lint:fix
```



### 🛠 Testing

Use the following command to run unit tests with coverage:

```
$ yarn test
```

Use the following to update unit tests

```
$ yarn test -u
```

Use the following to run unit tests in watch mode while developing:

```
$ yarn test --watch
```



### 🎨 Storybook

Stories (*.story.tsx) can be automatically added to `storyLoader.js` with :

```
$ yarn prestorybook
```



### 🏗 Build

Run `expo build:ios -t archive` to build for the [App Store Connect](https://appstoreconnect.apple.com/) and `expo build:android -t app-bundle` for the [Google Play Console](https://play.google.com/console/developers).



### ©️ Open source - licence

Repository and contributions are under [GNU General Public License v3.0](https://github.com/NotMyFaultEarth/nmf-app/blob/main/LICENSE)
