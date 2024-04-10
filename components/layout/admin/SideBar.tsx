import Link from 'next/link';
import {
  HandCoins,
  LayoutDashboard,
  MessageCircleQuestion,
  Settings,
  SquareMenu,
  SquareUser,
  TableProperties,
} from 'lucide-react';
import { useRouter } from 'next/router';

function SideBar() {
  const router = useRouter();

  const isActive = (href: string) => href === router.pathname;
  return (
    <div className='w-[15%] bg-custom-red h-full p-5 flex flex-col gap-4 pt-20'>
      {routes.map(({ href, children, name }) => (
        <Link
          href={href}
          className={`px-5 py-2 flex gap-3 items-center rounded ${
            isActive(href)
              ? 'bg-white text-custom-red'
              : 'bg-transparent text-white'
          }`}>
          {children}
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
}

const routes = [
  {
    href: '/admin',
    children: <LayoutDashboard />,
    name: 'Dashboard',
  },
  {
    href: '/admin/orders/orders',
    name: 'Orders',
    children: <TableProperties />,
  },
  {
    href: '/admin/menu/menu',
    name: 'Menu',
    children: <SquareMenu />,
  },
  {
    href: '/admin/admin-settings/settings',
    name: 'Settings',
    children: <Settings />,
  },

  {
    href: '/admin/payment/payment',
    name: 'Payment',
    children: <HandCoins />,
  },
  {
    href: '/admin/faq/faq',
    name: 'FAQ',
    children: <MessageCircleQuestion />,
  },
  {
    href: '/admin/contact/contact',
    name: 'Contact',
    children: <SquareUser />,
  },
];

export default SideBar;
