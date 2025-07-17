# Web前端技术学习平台

这是一个基于 [Next.js](https://nextjs.org) 构建的有关《Web前端技术》的学习平台，旨在集中展示本学期的课程学习成果，帮助初学者能够对这门课有一个初步的认识。

## 项目简介

![平台首页截图](P231014781 成敏 期末作业\README picture\首页.jpg)

Web前端技术平台是一个趣味的前端技术开发学习平台，致力于：
- 前端开发相关知识点
  ![项目展示](P231014781 成敏 期末作业\README picture\项目介绍.jpg)
  - HTML基础关卡、进阶关卡（HTML标签和文档结构、HTML进阶实战）
  - CSS（样式、布局、动画）
  - JavaScript（核心概念展示、DOM操作、异步编程）
  - React（核心概念展示、React Hooks核心知识）
  - Next.js( 核心功能)
- 提供互动式的文化学习体验
  ![互动学习界面]
  - HTML基础关卡·HTML标签和文档结构(P231014781 成敏 期末作业\README picture\HTML基础.jpg)
  - 进阶关卡·HTML进阶实战(P231014781 成敏 期末作业\README picture\HTML进阶.jpg)
  - CSS·样式(P231014781 成敏 期末作业\README picture\CSS样式.jpg)
  - CSS·布局(P231014781 成敏 期末作业\README picture\CSS布局.jpg)
  - CSS·动画(P231014781 成敏 期末作业\README picture\CSS动画.jpg)
  - JavaScript·核心概念展示(P231014781 成敏 期末作业\README picture\JavaScript 基础.jpg)
  - JavaScript·DOM操作(P231014781 成敏 期末作业\README picture\JavaScript DOM.jpg)
  - JavaScript·异步编程(P231014781 成敏 期末作业\README picture\JavaScript 异步编程.jpg)
  - React·核心概念展示(P231014781 成敏 期末作业\README picture\React基础.jpg)
  - React·Hooks核心知识(P231014781 成敏 期末作业\README picture\React Hook.jpg)
  - Next.js·核心功能(P231014781 成敏 期末作业\README picture\Next.js 应用.jpg)

## QAnything集成

![QAnything知识问答功能](P231014781 成敏 期末作业\README picture\Qanything问答入口页面.jpg)(P231014781 成敏 期末作业\README picture\QAnything 问答.jpg)

### 集成路径
1. 在项目中安装QAnything SDK
```bash
npm install qanything-client
```
2. 在`src/lib/qanything.ts`中配置API连接
```typescript
import { QAnything } from 'qanything-client';

export const qanything = new QAnything({
  apiKey: process.env.QANYTHING_API_KEY,
  endpoint: 'https://api.qanything.cn/v1',
  cacheTTL: 3600 // 1小时缓存
});
```
3. 在需要使用的页面组件中导入并使用
```typescript
import { qanything } from '@/lib/qanything';

async function searchCulturalHeritage(query: string) {
  const results = await qanything.search({
    query,
    collection: 'cultural-heritage'
  });
  return results;
}
```

### 实现细节
- 使用QAnything的搜索API实现非遗知识问答
  - 支持自然语言查询
  - 返回相关Web知识点介绍等信息
- 集成语义搜索功能，提升用户体验
  - 理解用户查询意图
  - 支持同义词扩展
  - 支持模糊匹配
- 实现本地缓存机制减少API调用
  - IndexedDB存储查询结果
  - 智能缓存更新策略
  - 离线可用性支持

## WakaTime集成

1. 安装WakaTime插件（P231014781 成敏 期末作业\README picture\Wakatime 时长展示.jpg）
```bash
npm install --save-dev wakatime
```
2. 在项目根目录创建`.wakatime-project`文件
```
[settings]
api_key = your-api-key
project = Web前端技术学习平台
```
3. 配置API密钥
   - 在WakaTime官网获取个人API密钥
   - 添加到`.wakatime-project`文件
   - 或设置环境变量`WAKATIME_API_KEY`
4. 集成开发时间统计功能
   - 自动跟踪代码编辑时间
   - 按文件类型统计
   - 生成可视化报告
   - 支持IDE插件集成
5. 可视化开发时间报告（P231014781 成敏 期末作业\README picture\编程时长展示.jpg）
   - 查看个人或团队的开发时间分布
   - 识别效率低下的代码区域
   - 提供改进建议

## Next.js项目结构

```
blog-platform/
├── src/
│   ├── app/              # Next.js应用路由
│   ├── components/       # 可复用组件
│   ├── lib/              # 工具函数和配置
│   ├── styles/           # 全局样式
│   └── types/            # TypeScript类型定义
├── public/               # 静态资源
├── .gitignore
├── package.json
└── README.md
```

## 旧作业整合

 ![旧作业整合展示](P231014781 成敏 期末作业\README picture\平时作业页面介绍.jpg)

## 项目文件结构

以下是项目相关的主要文件和目录：
1. 文档文件
   - `README.md`: 项目说明文档
   - `学习笔记.md`: 课程学习笔记
2. 配置文件
   - `package.json`: 项目依赖和脚本配置
   - `package-lock.json`: 依赖版本锁定文件
   - `node-v22.17.0-x64.msi`: Node.js 安装程序
3. HTML文件
   - `index.html`: 项目入口HTML文件
   - `HTML基础语句训练.html`: HTML基础练习文件
   - `25-3-19-css.html`: CSS练习文件
   - `25-3-26-css.html`: CSS练习文件
   - `25-4-1-work.html`: 作业文件
   - `25-4-2-JavaScript.html`: JavaScript练习文件
   - `25-4-9-JavaScript.html`: JavaScript练习文件
   - `25-4-9-上课案例.html`: 上课案例文件
   - `25-4-16-JavaScript上课案例.html`: JavaScript上课案例
   - `25-4-16-JavaScript异步编程练习.html`: 异步编程练习
4. 项目目录
   - `Web-develop-main`: Web开发主目录
   - `P231014781 成敏 期末作业`: 期末作业目录
     - `blog-platform`: 博客平台项目
     - `README picture`: README文档图片

具体介绍：
1. 传统技艺展示页面
   ![传统技艺展示](/img/图片2.png)
   - 整合路径：`src/app/crafts/page.tsx`
   - 功能：
     - 3D文物展示（使用Three.js）
       - 支持360°全方位旋转查看文物细节
       - 高清纹理贴图还原文物真实面貌
       - 文物历史背景介绍与讲解
     - 制作工艺流程图解
       - 详细展示传统工艺的制作步骤
       - 每个步骤的技术要点和注意事项
       - 传统工具与现代工具的对比
     - 传承人访谈视频
       - 记录非遗传承人的技艺传承故事
       - 访谈内容的文字转录和关键点标注
       - 按主题分类的访谈片段（历史、技艺、传承）
2. 二十四节气日历组件
   ![节气日历组件](/img/图片5.png)
   - 整合路径：`src/components/calendar/SolarTermsCalendar.tsx`
   - 功能：
     - 节气时间轴
       - 可视化展示全年24节气的时间分布
       - 精确到分秒的节气交节时间提示
       - 节气与农历、公历日期的对照查询
     - 相关民俗活动介绍
       - 各节气的传统习俗和活动详解
       - 不同地区的节气习俗差异对比
       - 习俗背后的文化含义和历史渊源
     - 节气养生知识
       - 按节气推荐的饮食调理方法
       - 适合各节气的运动和锻炼方式
       - 节气变化对人体健康的影响及预防措施
3. 古琴艺术互动模块
    ![古琴艺术模块](/img/图片6.png)
    - 整合路径：`src/app/music/guqin/page.tsx`
    - 功能：
      - 古琴音色体验
        - 模拟真实古琴的音色和演奏效果
        - 可交互的琴弦弹奏体验
        - 不同琴曲的音色特点对比
      - 名曲欣赏
        - 精选古琴经典曲目的音频播放
        - 曲目的历史背景和文化内涵介绍
        - 曲目的结构分析和演奏技巧讲解
      - 指法教学动画
        - 3D动画展示古琴的基本指法
        - 分步教学的指法练习指南
        - 常见指法错误的纠正方法
4. CSS样式练习页面
    ![CSS样式练习](P231014781 成敏 期末作业\README picture\平时作业·CSS代码页面展示.jpg)（P231014781 成敏 期末作业\README picture\平时作业·CSS页面展示.jpg）
    - 整合路径：`src/app/exercises/css/page.tsx`
    - 功能：
      - 外部、内部和内嵌样式表实践
        - 三种样式表的使用方法和区别
        - 样式优先级的练习和测试
        - 样式继承和层叠的效果展示
      - 选择器应用（类选择器、ID选择器、伪类选择器）
        - 各种选择器的语法和使用场景
        - 选择器优先级的比较和练习
        - 复合选择器的组合使用
      - 文本格式化与链接样式设计
        - 字体、颜色、行高的设置和调整
        - 文本对齐和装饰效果的实现
        - 链接的状态样式和过渡效果
5. JavaScript异步编程练习
    ![异步编程实践](P231014781 成敏 期末作业\README picture\平时作业·异步编程.jpg)
    - 整合路径：`src/app/exercises/js-async/page.tsx`
    - 功能：
      - setTimeout与Promise异步操作
        - setTimeout的基本使用和延时控制
        - Promise的创建、解析和拒绝
        - Promise链的构建和错误处理
      - async/await语法实践
        - async函数的定义和使用
        - await关键字的作用和注意事项
        - 异步函数的错误处理
      - GitHub API数据获取与展示
        - 使用fetch API调用GitHub接口
        - 处理API返回的数据和错误
        - 数据的展示和分页加载
      - 动态表格生成
        - 从API获取数据并生成表格
        - 表格的排序、筛选和分页功能
        - 表格数据的动态更新和删除

## 开始使用

### 开发环境

1. 克隆仓库
```bash
git clone https://github.com/your-repo/blog-platform.git
cd blog-platform
```
2. 安装依赖
```bash
npm install
```
3. 配置环境变量
```bash
cp .env.example .env.local
```
4. 启动开发服务器
```bash
npm run dev
```
5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果

### 生产环境

1. 构建生产版本
```bash
npm run build
```
2. 启动生产服务器
```bash
npm run start
```
3. 或者使用PM2管理进程
```bash
npm install -g pm2
pm2 start npm --name "blog-platform" -- run start
```

### 测试环境

1. 运行单元测试
```bash
npm test
```
2. 运行端到端测试
```bash
npm run e2e
```



## 联系我们

如有任何问题或建议，请联系我们。

## 技术特性

![技术架构图](/img/计算机设计大赛封面图设计.png)

- **Next.js 15** - 使用最新的React框架
- **TypeScript** - 类型安全的开发体验
- **Tailwind CSS** - 现代化的样式框架
- **响应式设计** - 适配各种设备尺寸
- **传统文化主题** - 红金配色体现中华文化特色

## 部署

推荐使用 [Vercel平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 部署您的Next.js应用。

查看 [Next.js部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。
