import { navbar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "资源",
    icon: "code",
    prefix: "/",
    children: [
      "code/Markdown",
      "code/AutoHotKey",
      "code/Electron",
      {
        text: "📑学术资源",
        icon: "vue",
        prefix: "",
        children: [
          "services/文献论文电子书搜索",
          "services/文献翻译工具,
          "services/文库免费下载工具",
        ],
      },
    ],
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      "apps/AppNotes",
      "apps/Chrome",
      {
        text: "系统",
        icon: "any",
        prefix: "",
        children: [
          "windows/faq",
        ],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: [
      "Diet",
      "Shoppinglist",
      "Coupon",
    ],
  },
  { text: "个人主页", icon: "tool", link: "https://gurbk.github.io/" },
]);
