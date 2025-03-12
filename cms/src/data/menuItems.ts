import { MenuItem } from '@/store/features/menuSlice'
import {
  LayoutGrid,
  Settings,
  Wrench,
  FileText,
  Users,
  PenTool,
  ImageIcon,
  SlidersHorizontal,
  LayoutDashboard,
  MenuSquare,
  Menu,
  Pencil,
  FileCode,
  Bot,
} from 'lucide-react'

export const menuData: MenuItem[] = [
  {
    id: 'components',
    title: 'Components',
    icon: 'LayoutGrid',
    items: [
      {
        id: 'components-navbar',
        title: 'Navbar',
        icon: 'Menu',
        href: '/components/navbar',
      },
      {
        id: 'components-footer',
        title: 'Footer',
        icon: 'MenuSquare',
        href: '/components/footer',
      },
      {
        id: 'components-menu',
        title: 'Menu Items',
        icon: 'Menu',
        href: '/components/menu-items',
      },
      {
        id: 'components-gallery',
        title: 'Gallery',
        icon: 'ImageIcon',
        href: '/components/gallery',
      },
      {
        id: 'components-cards',
        title: 'Cards',
        icon: 'LayoutDashboard',
        href: '/components/cards',
      },
      {
        id: 'components-sliders',
        title: 'Sliders',
        icon: 'SlidersHorizontal',
        href: '/components/sliders',
      },
    ],
  },
  {
    id: 'creator',
    title: 'Creator Studio',
    icon: 'Pencil',
    items: [
      {
        id: 'creator-pages',
        title: 'Pages',
        icon: 'FileText',
        href: '/creator/pages',
      },
      {
        id: 'creator-blogs',
        title: 'Blogs',
        icon: 'PenTool',
        href: '/creator/blogs',
      },
    ],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'Settings',
    items: [
      {
        id: 'settings-system',
        title: 'System',
        icon: 'Wrench',
        href: '/settings/system',
      },
      {
        id: 'settings-user',
        title: 'User',
        icon: 'Users',
        href: '/settings/user',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    items: [
      {
        id: 'tools-form',
        title: 'Form Builder',
        icon: 'FileCode',
        href: '/tools/form-builder',
      },
      {
        id: 'tools-ai',
        title: 'AI',
        icon: 'Bot',
        href: '/tools/ai',
      },
    ],
  },
] 