import { MenuItem } from '@/types';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';

export default function RenderLink({ menu, url }: { menu: MenuItem, url: string }) {
    return (
        <li>
            <Link
                href={menu.href}
                className={clsx(
                    'block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700',
                    {
                        'bg-gray-100 text-gray-700': url.startsWith(menu.active)
                    }
                )}
            >
                {menu.label}
            </Link>
        </li>
    )
}
