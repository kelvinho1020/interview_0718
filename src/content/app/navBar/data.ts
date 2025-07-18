export interface NavItem {
  id: string;
  label: string;
  href: `#${string}`;
}

export const navItems: NavItem[] = [
  { id: '1', label: '白頭翁的特性', href: '#characteristics' },
  { id: '2', label: '白頭翁的故事', href: '#story' },
  { id: '3', label: '白頭翁的美照', href: '#photos' },
  { id: '4', label: '白頭翁的危機', href: '#crisis' },
];

export const hashToIdMap: Record<string, string> = Object.fromEntries(
  navItems.map(item => [item.href, item.id])
);