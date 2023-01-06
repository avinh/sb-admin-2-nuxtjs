import { ISidebarConfig } from "~/interfaces/sidebar-config";

export const sidebarConfig: ISidebarConfig[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    link: "/",
    icon: "fas fa-fw fa-tachometer-alt"
  },
  {
    id: "divider"
  },
  {
    id: "resource",
    name: "Resource",
    icon: "fas fa-fw fa-server",
    sub: [
      {
        name: "FEATURE:",
        items: [
          {
            id: "list",
            name: "List",
            link: "/resource/user"
          },
          {
            id: "create",
            name: "Create",
            link: "/resource/user#create"
          }
        ]
      }
    ]
  },
  {
    id: "components",
    name: "Components",
    icon: "fas fa-fw fa-cog",
    sub: [
      {
        name: "CUSTOM COMPONENTS:",
        items: [
          {
            id: "buttons",
            name: "Buttons",
            link: "/buttons"
          },
          {
            id: "cards",
            name: "Cards",
            link: "/cards"
          },
          {
            id: "table",
            name: "Table",
            link: "/table"
          },
        ]
      }
    ]
  },
  {
    id: "pages",
    name: "Pages",
    icon: "fas fa-fw fa-folder",
    sub: [
      {
        name: "OTHER PAGES:",
        items: [
          {
            id: "404",
            name: "404",
            link: "/404"
          },
          {
            id: "404-nolayout",
            name: "404 No Layout",
            link: "/404-nolayout"
          }
        ]
      }
    ]
  }
]