import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleCheckBig } from "lucide-react"
import { Button } from '@/components/ui/button';

export default function Detail() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
            <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2 ">
                        <CircleCheckBig className="w-24 h-24 text-teal-600" />
                        <p>Payment Confirm!</p>
                    </div>
                    <div className="mt-6">
                        <Button>Continue</Button>
                    </div>
                </div>
            </section>
            <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <header className='bg-teal-600 text-white text-center p-8 sm:rounded-t-lg'>
                    <p>Bangkok ---- Chiang Mai</p>
                    <p>29 Aug, 2024</p>
                </header>
                <div className='p-4 sm:p-6'>
                    <p>Bangkok ---- Chiang Mai</p>
                    <div className='flex items-center gap-2 my-4'>
                        <Avatar className='w-16 h-16' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Name</p>
                    </div>
                    <p>29 Aug 12:20 - 13:15, 1h 15m</p>
                </div>
            </div>
        </div>
    );
}
