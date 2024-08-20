import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Auth } from '@/types';
import AdminMenuFooter from './AdminMenuFooter';
import UserMenuFooter from "./UserMenuFooter";

export default function MenuFooter({ auth }: { auth: Auth }) {
    return (
        <Popover>
            <PopoverTrigger className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 w-full">
                <Avatar className="size-10 rounded-full object-cover">
                    <AvatarImage src={auth.user?.avatar} alt="@shadcn" />
                    <AvatarFallback>{auth.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <p className="text-xs text-left">
                    <strong className="block font-medium">{auth.user.name}</strong>
                    <span> {auth.user.email} </span>
                </p>
                <PopoverContent className='ms-2 w-64 p-1'>
                    <ul className="space-y-2 p-0 m-0">
                        {
                            auth.guard == 'admin' ?
                                <AdminMenuFooter />
                                : <UserMenuFooter />
                        }
                    </ul>
                </PopoverContent>
            </PopoverTrigger>
        </Popover>
    )
}
