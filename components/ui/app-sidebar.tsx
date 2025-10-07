"use client"

import * as React from "react"
import {
IconActivity,
  IconCashRegister,
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
  IconPackage,
  IconReport,
  IconSearch,
  IconSettings,
  IconTag,
  IconTrademark,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Icon } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Brands",
      url: "/brands",
      icon: IconTag,
    },
    {
      title: "Products",
      url: "/products",
      icon: IconPackage,
    },
    {
      title: "Point of Sale (POS)",
      url: "/pos",
      icon: IconCashRegister,
    },
    {
      title: "Sales History",
      url: "/sales-history",
      icon: IconListDetails,
    },
    {
      title: "Logs",
      url: "/logs",
      icon: IconReport,
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Inventory Management</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
