import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Category, WPTermObject } from '..';

export interface Sublink {
    href: string;
    title: string
}

export interface DropdownProps {
    children?: React.ReactNode
    //key: string;
    categorychildren: WPTermObject[];
    parentname: string
}

export const DropdownMenu = ({categorychildren, parentname} : DropdownProps) => {
    return (
        <ul>
            {categorychildren.map((categorychild) => (
                <li>
                    <Link href={`/${parentname}/${categorychild.slug}`}>{categorychild.name}</Link>
                </li>
            ))}
        </ul>
    )
}

