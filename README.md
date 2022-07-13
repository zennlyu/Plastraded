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

#### Vision

在平台获得用户允许拍照权限后，用户可随时上传/拍摄不当丢置的废弃塑料照片，其拍摄时的时间、地理位置、图像信息等元数据会进入后端数据库。用户的贡献数量将会以仿 Github 的形式显示在用户资料中。用户也可以预约废弃塑料社区点的上门回收，或者亲自提交。以此兑换环保积分/平台币，积累到一定数量可以兑换生产的环保产品。

工作坊生产的所有环保产品都会拥有唯一的 id 和二维码，我们希望每一件商品在生命生涯的最后都能够借由随手一扫重回资源的循环网络中。即使不然，我们也希望其可以在一个更加重视垃圾分类与回收的社会中得到正确的处理。

我们同时也开辟“碳足迹追踪与交易”的功能，以此来试验每个公民在碳市场中可能承担的互利共赢的角色。用户可以依据我们的算法和标准计算自己的日/周/月/年碳排放量，算法与标准在 Github 开源，每个用户可以贡献校正关联数据，使其更加精准。

|      | Categories  | Mission        | Describes                                                    | Tech Stack                                    | Tech Explained                                               |
| ---- | ----------- | -------------- | ------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------ |
| 1    | Pre-Mission | 商业计划书     | 项目的核心骨架                                               |                                               |                                                              |
| 2    |             |                |                                                              |                                               |                                                              |
| 3    | 软件        | Website        | 项目网页                                                     | React + Flask/Django                          |                                                              |
| 4    |             | NMF.earth      | 众包报告塑料分布 后台算法地理呈现 塑料消费计算 碳足迹追踪 环境论坛信息聚合 | React Native +  Redux + Storybook             | RN 允许前端人员使用 js 语言一次性编写，同时在 iOS，Android 以及 Web 平台发布通用应用，节省投入 |
| 5    |             | 后台管理       | 用户订阅，邮件服务，网站流量，可视化仪表盘等                 | Django/Flask/SpringBoot                       |                                                              |
| 6    | 软硬件综合  | 卫星识别       | 利用欧空局和谷歌地球、NOAA 等 GIS 机构的公开数据获取 SWIR（短波红外） 数据，进行塑料实时探测和扫描 | GIS 分析 SWIR(短波红外)解析 工业视觉 机器学习 |                                                              |
| 7    |             | 无人机图像识别 | 参考 ellipsis                                                | 工业视觉                                      |                                                              |
| 8    |             | 无人机红外识别 | 参考 ellipsis                                                | 工业视觉                                      |                                                              |
| 9    | 硬件        | 粉碎机         |                                                              |                                               |                                                              |
| 10   |             | 挤出造粒机     |                                                              |                                               |                                                              |
| 11   |             | 3D 打印机      |                                                              |                                               |                                                              |
| 12   | 业务        | 数字营销       |                                                              |                                               |                                                              |
| 13   |             | 媒体运营       |                                                              |                                               |                                                              |

希望它能成为一个缓慢成长的项目，也希望代码能成为我表达环境问题热忱的一种方式。
