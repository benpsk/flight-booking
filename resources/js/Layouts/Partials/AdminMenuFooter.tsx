import { Link } from '@inertiajs/react';

export default function AdminMenuFooter() {
    return (
        <li>
            <Link
                href={route('admin.logout')} method="post" as="button"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 w-full text-left"
            >
                Logout
            </Link>
        </li>
    )
}
