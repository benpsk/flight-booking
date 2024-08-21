import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Detail() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
            <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
                <div>
                    <header className="my-2">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact details</h2>
                    </header>
                    <div className="mb-4">
                        <p>Jeff Clay</p>
                        <p>bengunn.dev@gmail.com</p>
                        <p>09453340064</p>
                    </div>
                </div>
                <div>
                    <header className="my-2">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Passenger details</h2>
                    </header>
                    <div>
                        <p>Jeff Clay</p>
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
