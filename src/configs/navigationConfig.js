import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [

  {
    type: "groupHeader",
    groupTitle: "PAGES"
  },
  {
    id: "analyticsDash",
    title: "Admin",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "chat",
    title: "Chat",
    type: "item",
    icon: <Icon.MessageSquare size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/chat"
  },
  {
    id: "users",
    title: "Influencers",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/list"
      },
      {
        id: "view",
        title: "View",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/view"
      },
      {
        id: "edit",
        title: "Edit",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/user/edit"
      }
    ]
  },
  

  {
    id: "profile",
    title: "Influencer Profile",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/profile",
    collapsed: true
  },
  {
    id: "accountSettings",
    title: "Account Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/account-settings"
  },
  {
    id: "faq",
    title: "FAQ",
    type: "item",
    icon: <Icon.HelpCircle size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/faq"
  },

  {
    id: "knowledgeBase",
    title: "Knowledge Base",
    type: "item",
    icon: <Icon.Info size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/knowledge-base",
    parentOf: [
      "/pages/knowledge-base/category/questions",
      "/pages/knowledge-base/category"
    ]
  },


  

  {
    id: "authentication",
    title: "Authentication",
    type: "collapse",
    icon: <Icon.Unlock size={20} />,
    children: [
      {
        id: "login",
        title: "Login",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/login",
        newTab: true
      },
      {
        id: "register",
        title: "Register",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/register",
        newTab: true
      },
      {
        id: "forgotPassword",
        title: "Forgot Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/forgot-password",
        newTab: true
      },
      {
        id: "resetPassword",
        title: "Reset Password",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/reset-password",
        newTab: true
      },
      {
        id: "lockScreen",
        title: "Lock Screen",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/pages/lock-screen",
        newTab: true
      }
    ]
  },
  {
    id: "miscellaneous",
    title: "Miscellaneous",
    type: "collapse",
    icon: <Icon.FileText size={20} />,
    children: [
      {
        id: "comingSoon",
        title: "Coming Soon",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/coming-soon",

        newTab: true
      },
      {
        id: "error",
        title: "Error",
        type: "collapse",
        icon: <Icon.Circle size={12} />,
        children: [
          {
            id: "404",
            title: "404",
            type: "item",

            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/misc/error/404",

            newTab: true
          },
          {
            id: "500",
            title: "500",
            type: "item",

            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/misc/error/500",

            newTab: true
          }
        ]
      },
      {
        id: "notAuthorized",
        title: "Not Authorized",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/not-authorized",

        newTab: true
      },
      {
        id: "maintenance",
        title: "Maintenance",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/misc/maintenance",

        newTab: true
      }
    ]
  },
  
  {
    type: "groupHeader",
    groupTitle: "Frontend Features"
  },
  {
    id: "sweetAlert",
    title: "Alerts",
    icon: <Icon.AlertCircle size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/sweet-alert"
  },
  {
    id: "toastr",
    title: "Notifications",
    icon: <Icon.Zap size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/toastr"
  },
  // {
  //   id: "rcSlider",
  //   title: "Rc Slider",
  //   icon: <Icon.Sliders size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/slider"
  // },
  {
    id: "fileUploader",
    title: "File Uploader",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/file-uploader"
  },
  // {
  //   id: "wysiwygEditor",
  //   title: "Wysiwyg Editor",
  //   icon: <Icon.Edit size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/wysiwyg-editor"
  // },
  // {
  //   id: "drag_&_drop",
  //   title: "Drag & Drop",
  //   icon: <Icon.Droplet size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/drag-and-drop"
  // },
  // {
  //   id: "tour",
  //   title: "Tour",
  //   icon: <Icon.Info size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/tour"
  // },
  {
    id: "clipBoard",
    title: "Add to Clipboard",
    icon: <Icon.Copy size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/clipboard"
  },
  // {
  //   id: "contentMenu",
  //   title: "Context Menu",
  //   icon: <Icon.Menu size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/context-menu"
  // },
  // {
  //   id: "swiper",
  //   title: "Swiper",
  //   icon: <Icon.Smartphone size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/swiper"
  // },
  // {
  //   id: "access-control",
  //   title: "Access Control",
  //   icon: <Icon.Lock size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/access-control"
  // },
  // {
  //   id: "i18n",
  //   title: "I18n",
  //   icon: <Icon.Globe size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/i18n"
  // },
  // {
  //   id: "treeView",
  //   title: "Tree",
  //   icon: <Icon.GitPullRequest size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/tree"
  // },
  // {
  //   id: "extPagination",
  //   title: "Pagination",
  //   icon: <Icon.MoreHorizontal size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/extensions/pagination"
  // },
  {
    id: "extImport",
    title: "Import",
    icon: <Icon.DownloadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/import"
  },
  {
    id: "extExport",
    title: "Export",
    icon: <Icon.UploadCloud size={20} />,
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/extensions/export"
  },
  {
    id: "extExportSelected",
    title: "Export Selected",
    icon: <Icon.CheckSquare size={20} />,
    type: "item",
    navLink: "/extensions/export-selected",
    permissions: ["admin", "editor"]
  },
  // {
  //   type: "groupHeader",
  //   groupTitle: "OTHERS"
  // },
  // {
  //   id: "menuLevels",
  //   title: "Menu Levels",
  //   icon: <Icon.Menu size={20} />,
  //   type: "collapse",
  //   children: [
  //     {
  //       id: "secondLevel",
  //       title: "Second Level",
  //       icon: <Icon.Circle size={12} />,
  //       type: "item",
  //       permissions: ["admin", "editor"],
  //       navlink: ""
  //     },
  //     {
  //       id: "secondLevel1",
  //       title: "Second Level",
  //       icon: <Icon.Circle size={12} />,
  //       type: "collapse",

  //       children: [
  //         {
  //           id: "ThirdLevel",
  //           title: "Third Level",
  //           icon: <Icon.Circle size={12} />,
  //           type: "item",
  //           permissions: ["admin", "editor"],
  //           navLink: ""
  //         },
  //         {
  //           id: "ThirdLevel1",
  //           title: "Third Level",
  //           icon: <Icon.Circle size={12} />,
  //           type: "item",
  //           permissions: ["admin", "editor"],
  //           navLink: ""
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: "disabledMenu",
  //   title: "Disabled Menu",
  //   icon: <Icon.EyeOff size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "#",
  //   disabled: true
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "SUPPORT"
  // },
  // {
  //   id: "documentation",
  //   title: "Documentation",
  //   icon: <Icon.Folder size={20} />,
  //   type: "external-link",
  //   permissions: ["admin", "editor"],
  //   navLink:
  //     "https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation"
  // },
  // {
  //   id: "raiseSupport",
  //   title: "Raise Support",
  //   icon: <Icon.LifeBuoy size={20} />,
  //   type: "external-link",
  //   newTab: true,
  //   permissions: ["admin", "editor"],
  //   navLink: "https://pixinvent.ticksy.com/"
  // }
]

export default navigationConfig
