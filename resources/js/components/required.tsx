import { HTMLAttributes } from 'react';

export default function Required({ className = '', ...props }: HTMLAttributes<HTMLParagraphElement> ) {
    return (
        <span {...props} className={'text-red-600 dark:text-red-400' + className}>
            *
        </span>
    );
}
