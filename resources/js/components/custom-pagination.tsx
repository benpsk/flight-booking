import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Pagination as PaginationType } from "@/types";
import { Label } from "@/components/ui/label";
import { router } from "@inertiajs/react";

export default function CustomPagination<T>({ pagination, query, perPages = [10, 20, 50], only = [] }: { pagination: PaginationType<T>, query: string, perPages?: number[], only?: string[] }) {
    const handlePerPageUpdate = (perPage: string) => {
        router.get(pagination.path + "?perPage=" + perPage + query, {}, {
            preserveScroll: true,
            preserveState: true,
        });
    }
    const { current_page: currentPage, last_page: lastPage } = pagination;
    let pages = [];
    if (currentPage > 3) {
        if (lastPage - 3 < currentPage) {
            pages = ['...', lastPage - 2, lastPage - 1, lastPage];
        } else {
            pages = [currentPage - 2, currentPage - 1, currentPage, '...'];
        }
    } else {
        pages = Array.from({ length: Math.min(3, lastPage) }, (_, i) => i + 1);
    }
    if (lastPage > 3 && pages.length === 3) {
        pages.push('...');
    }

    return (
        <div className="flex flex-wrap justify-between">
            <div className="flex items-center gap-2">
                <Label>Showing</Label>
                <div>
                    <Select value={`${pagination.per_page}`} onValueChange={value => handlePerPageUpdate(value)} >
                        <SelectTrigger>
                            <SelectValue placeholder="per page" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {
                                    perPages.map(number => (
                                        <SelectItem key={number} value={`${number}`} >{number}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Label>of {pagination.total}.</Label>
            </div>
            <div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem >
                            <PaginationPrevious
                                href={pagination.prev_page_url + query}
                                className={pagination.prev_page_url ? '' : 'pointer-events-none'}
                                preserveScroll
                                preserveState
                                only={only}
                            />
                        </PaginationItem>
                        {
                            pages.map(page => (
                                <PaginationItem key={page}>
                                    {typeof page == 'string' ?
                                        <PaginationEllipsis />
                                        :
                                        <PaginationLink
                                            href={pagination.path + "?page=" + page + query}
                                            isActive={page == pagination.current_page}
                                            preserveScroll
                                            preserveState
                                            only={only}
                                        >
                                            {page}
                                        </PaginationLink>
                                    }
                                </PaginationItem>
                            ))
                        }
                        <PaginationItem>
                            <PaginationNext
                                href={pagination.next_page_url + query}
                                className={pagination.next_page_url ? '' : 'pointer-events-none'}
                                preserveScroll
                                preserveState
                                only={only}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
