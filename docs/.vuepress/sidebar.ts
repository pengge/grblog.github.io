import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  "/Fitness",
  "/Read",
  {
    text: "🚀 代码",
    icon: "",
    prefix: "/code/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🧰 资源分享",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "💻家庭网络知识整理",
    icon: "",
    prefix: "/web/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🏗️ 网站部署",
    icon: "",
    prefix: "/deploy/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "📑学术资源",
    icon: "",
    prefix: "/services/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🪟 系统问题",
    icon: "",
    prefix: "/windows/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "🛖 生活",
    icon: "",
    prefix: "/family/",
    link: "",
    collapsable: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsable: true,
    children: "structure",
  },
]);
