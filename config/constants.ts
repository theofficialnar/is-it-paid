import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCalendarCheck, faArchive } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  name: string,
  path: string,
  icon: IconProp,
}

export const NAV_ITEMS: ReadonlyArray<NavItem> = Object.freeze([
  {
    name: 'Dashboard',
    path: '/',
    icon: faHome,
  },
  {
    name: 'Current Year',
    path: '/current',
    icon: faCalendarCheck,
  },
  {
    name: 'Archive',
    path: '/archive',
    icon: faArchive,
  },
])