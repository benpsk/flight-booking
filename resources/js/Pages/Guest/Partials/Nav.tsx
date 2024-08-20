import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Nav({ classNames = "flex text-sm items-center gap-6" }: { classNames?: string }) {
    const { url } = usePage();
    const { auth } = usePage<PageProps>().props;
    return (
        <ul className={classNames}>
            <li>
                <Link className={url.startsWith('/check-status') ? 'text-teal-600' : 'text-gray-500 transition hover:text-teal-600'} href="#" >Check Status</Link>
            </li>
            {
                auth.user ?
                    <li>
                        <Link href={route('dashboard')} >
                            <Button size="sm" className={'bg-teal-600 text-white hover:bg-teal-700'} >Dashboard</Button>
                        </Link>
                    </li>
                    :
                    <li>
                        <Link href={route('login')}>
                            <Button size="sm" className='bg-teal-600 text-white hover:bg-teal-700' >Login</Button>
                        </Link>
                    </li>
            }
        </ul>
    );
}
