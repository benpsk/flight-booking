import ApplicationLogo from '@/components/application-logo';
import { Link } from '@inertiajs/react';
import { Auth, MenuItem } from '@/types';
import Menu from './Menu';
import MenuFooter from './MenuFooter';

interface Menu {
    admin: MenuItem[];
    user: MenuItem[];
}

const menu: Menu = {
    admin: [
        { href: route('admin.dashboard'), active: '/admin/dashboard', label: 'Dashboard', isNested: false },
        { href: route('admin.booking'), active: '/admin/booking', label: 'Bookings', isNested: false },
    ],
    user: [
        { href: route('dashboard'), active: '/dashboard', label: 'Dashboard', isNested: false },
        { href: route('booking'), active: '/booking', label: 'My Booking', isNested: false },
    ]
};

export default function SideMenu({ auth }: { auth: Auth }) {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white overflow-y-auto custom-scrollbar">
            <div className="px-4 py-6">
                <Link href="/" className="grid h-10 place-content-center rounded-lg">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-teal-600 dark:text-gray-200" />
                </Link>
                <ul className="mt-6 space-y-1">
                    {
                        auth.guard == 'admin' ?
                            <Menu menus={menu.admin} />
                            :
                            <Menu menus={menu.user} />

                    }
                </ul>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <MenuFooter auth={auth} />
            </div>
        </div >
    );
}
