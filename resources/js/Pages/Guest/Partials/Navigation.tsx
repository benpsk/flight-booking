import ApplicationLogo from "@/components/application-logo";
import { Link } from "@inertiajs/react";
import Nav from "./Nav";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navigation() {
    return (
        <header className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mb-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <Link href="/" className="block text-teal-600">
                        <span className="sr-only">Flight</span>
                        <ApplicationLogo className="h-9 fill-current text-teal-600" />
                    </Link>
                </div>
                <nav aria-label="Global" className="hidden sm:block">
                    <Nav />
                </nav>
                <Sheet>
                    <SheetTrigger className="block sm:hidden rounded p-2 text-teal-600 transition hover:text-teal-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <nav aria-label="Global" className="block sm:hidden">
                            <Nav classNames="flex text-sm flex-col justify-start gap-4" />
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
