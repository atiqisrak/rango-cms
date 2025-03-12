import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MenuItem {
  id: string
  title: string
  href?: string
  icon?: string
  items?: MenuItem[]
}

interface MenuState {
  items: MenuItem[]
  activeItem: string | null
  expandedItems: string[]
}

const initialState: MenuState = {
  items: [
    {
      id: 'components',
      title: 'Components',
      icon: 'LayoutGrid',
      items: [
        {
          id: 'navbar',
          title: 'Navbar',
          href: '/components/navbar',
          icon: 'Menu'
        },
        {
          id: 'footer',
          title: 'Footer',
          href: '/components/footer',
          icon: 'Layout'
        },
        {
          id: 'menu-items',
          title: 'Menu Items',
          href: '/components/menu-items',
          icon: 'LayoutList'
        },
        {
          id: 'menus',
          title: 'Menus',
          href: '/components/menus',
          icon: 'MenuSquare'
        },
        {
          id: 'gallery',
          title: 'Gallery',
          href: '/components/gallery',
          icon: 'ImageIcon'
        },
        {
          id: 'cards',
          title: 'Cards',
          href: '/components/cards',
          icon: 'LayoutGrid'
        },
        {
          id: 'sliders',
          title: 'Sliders',
          href: '/components/sliders',
          icon: 'SlidersHorizontal'
        }
      ]
    },
    {
      id: 'creator',
      title: 'Creator Studio',
      icon: 'PenTool',
      items: [
        {
          id: 'pages',
          title: 'Pages',
          href: '/creator/pages',
          icon: 'FileText'
        },
        {
          id: 'blogs',
          title: 'Blogs',
          href: '/creator/blogs',
          icon: 'ScrollText'
        }
      ]
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'Settings',
      items: [
        {
          id: 'system',
          title: 'System',
          href: '/settings/system',
          icon: 'Settings'
        },
        {
          id: 'user',
          title: 'User',
          href: '/settings/user',
          icon: 'User'
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: 'Wrench',
      items: [
        {
          id: 'form-builder',
          title: 'Form Builder',
          href: '/tools/form-builder',
          icon: 'FileCode'
        },
        {
          id: 'ai',
          title: 'AI',
          href: '/tools/ai',
          icon: 'Bot'
        }
      ]
    }
  ],
  activeItem: null,
  expandedItems: []
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveItem: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload
    },
    toggleExpandedItem: (state, action: PayloadAction<string>) => {
      const index = state.expandedItems.indexOf(action.payload)
      if (index === -1) {
        state.expandedItems.push(action.payload)
      } else {
        state.expandedItems.splice(index, 1)
      }
    },
    collapseAllItems: (state) => {
      state.expandedItems = []
    },
    expandItem: (state, action: PayloadAction<string>) => {
      if (!state.expandedItems.includes(action.payload)) {
        state.expandedItems.push(action.payload)
      }
    }
  }
})

export const { setActiveItem, toggleExpandedItem, collapseAllItems, expandItem } = menuSlice.actions

export default menuSlice.reducer 