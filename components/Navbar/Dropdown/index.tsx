import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export interface Sublink {
    href: string;
    title: string
}

export interface DropdownProps {
    children?: React.ReactNode
    //key: string;
    sublinks: Sublink[];
}

export const DropdownMenu = ({sublinks} : DropdownProps) => {
    return (
        <ul>
            {sublinks.map((sublinks) => (
                <li>
                    <Link href={sublinks.href}>{sublinks.title}</Link>
                </li>
            ))}
        </ul>
    )
}

