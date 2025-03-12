'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from "@/lib/utils"
import { RootState } from '@/store/store'
import { setActiveItem, toggleExpandedItem } from '@/store/features/menuSlice'
import { toggleSidebar, setIsMobile } from '@/store/features/uiSlice'
import { MenuItem } from '@/store/features/menuSlice'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import {
  Circle,
  Bell,
  User,
  ChevronRight,
  LayoutGrid,
  Settings,
  Wrench,
  FileText,
  Users,
  PenTool,
  Image as ImageIcon,
  SlidersHorizontal,
  LayoutDashboard,
  MenuSquare,
  Menu,
  Pencil,
  FileCode,
  Bot,
  LogOut,
  UserCog,
  Home,
  FileQuestion,
  Contact,
  Layout,
  LayoutList,
  SquareStack,
  ScrollText,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NextImage from 'next/image'
import Image from 'next/image'

const iconMap = {
  Circle,
  LayoutGrid,
  Settings,
  Wrench,
  FileText,
  Users,
  PenTool,
  ImageIcon,
  SlidersHorizontal,
  MenuSquare,
  Menu,
  Layout,
  LayoutList,
  FileCode,
  Bot,
  ScrollText,
  User,
}

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const { sidebarOpen, isMobile } = useSelector((state: RootState) => state.ui)
  const { items, activeItem, expandedItems } = useSelector((state: RootState) => state.menu)
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [dispatch])

  useEffect(() => {
    const currentPath = pathname
    const findAndSetActiveItem = (items: MenuItem[]) => {
      for (const item of items) {
        if (item.href === currentPath) {
          dispatch(setActiveItem(item.id))
          return true
        }
        if (item.items && findAndSetActiveItem(item.items)) {
          dispatch(toggleExpandedItem(item.id))
          return true
        }
      }
      return false
    }
    findAndSetActiveItem(items)
  }, [pathname, items, dispatch])

  const renderMenuItem = (item: MenuItem) => {
    const Icon = item.icon ? iconMap[item.icon as keyof typeof iconMap] : Circle
    const isActive = item.id === activeItem
    const isExpanded = expandedItems.includes(item.id)

    if (item.items) {
      return (
        <SidebarGroup key={item.id}>
          <SidebarGroupLabel 
            onClick={() => dispatch(toggleExpandedItem(item.id))}
            className={cn(
              "cursor-pointer hover:bg-accent/50 rounded-md group/menu-label flex justify-between items-center",
              !isCollapsed && "px-2 py-1.5"
            )}
          >
            <div className="flex items-center">
              <Icon className="h-4 w-4 mr-2" />
              {!isCollapsed && <span>{item.title}</span>}
            </div>
            {!isCollapsed && (
              <ChevronRight className={cn(
                "h-4 w-4 transition-transform duration-200",
                isExpanded && "transform rotate-90"
              )} />
            )}
          </SidebarGroupLabel>
          {(isExpanded || isCollapsed) && (
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => {
                  const SubIcon = subItem.icon ? iconMap[subItem.icon as keyof typeof iconMap] : Circle
                  const isSubActive = subItem.id === activeItem
                  return (
                    <SidebarMenuItem key={subItem.id}>
                      <Link href={subItem.href || '#'}>
                        <SidebarMenuButton
                          isActive={isSubActive}
                          onClick={() => dispatch(setActiveItem(subItem.id))}
                          className={cn(
                            "w-full hover:bg-accent/50 transition-colors",
                            isSubActive && "bg-accent/70 text-accent-foreground",
                            !isCollapsed && "px-2 py-1.5"
                          )}
                          tooltip={isCollapsed ? subItem.title : undefined}
                        >
                          <SubIcon className="h-4 w-4" />
                          {!isCollapsed && <span className="ml-2">{subItem.title}</span>}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      )
    }

    return (
      <SidebarMenuItem key={item.id}>
        <Link href={item.href || '#'} className="w-full">
          <SidebarMenuButton
            isActive={isActive}
            onClick={() => dispatch(setActiveItem(item.id))}
            className={cn(
              "w-full hover:bg-accent/50 transition-colors",
              isActive && "bg-accent/70 text-accent-foreground",
              !isCollapsed && "px-2 py-1.5"
            )}
            tooltip={isCollapsed ? item.title : undefined}
          >
            <Icon className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">{item.title}</span>}
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    )
  }

  return (
    <div className="flex min-h-screen">
      <SidebarProvider 
        defaultOpen={false}
        open={!isCollapsed}
        onOpenChange={(open) => setIsCollapsed(!open)}
      >
        <Sidebar 
          className={cn(
            "fixed left-0 top-0 z-40 h-screen border-r transition-all duration-300",
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          )}
          variant="inset" 
          collapsible="icon"
        >
          <SidebarHeader className="border-b px-4 py-3">
            <Link href="/" className="flex items-center justify-center">
              <Image 
                src="/rango.webp"
                alt="Rango CMS"
                width={128}
                height={128}
              />
            </Link>
          </SidebarHeader>
          <SidebarContent className="px-2 py-2">
            {items.map(renderMenuItem)}
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <header className={cn(
            "fixed top-0 z-30 flex h-16 items-center justify-between border-b px-6 backdrop-blur transition-all duration-300",
            "bg-background/95 supports-[backdrop-filter]:bg-background/60",
            isCollapsed ? "left-[80px] w-[calc(100%-80px)]" : "left-[240px] w-[calc(100%-240px)]"
          )}>
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-full p-2 hover:bg-accent transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full h-8 w-8 overflow-hidden border hover:border-primary transition-colors">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <UserCog className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="py-8 px-4 mt-16">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
} 