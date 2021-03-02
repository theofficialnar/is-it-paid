interface NavItem {
  name: string,
  path: string,
}

export const NAV_ITEMS: ReadonlyArray<NavItem> = Object.freeze([
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Current Year',
    path: '/current',
  },
  {
    name: 'Archive',
    path: '/archive',
  },
])