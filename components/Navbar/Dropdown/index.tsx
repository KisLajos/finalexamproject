import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Category, WPTermObject } from '..';
import styles from './style.module.scss';
import navlinkstyles from '../Navlink/style.module.scss'
import navbarstyles from '../styles.module.scss';

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
        <ul className={navbarstyles.dropdown_content}>
            {categorychildren.map((categorychild) => (
                <li className={`${navlinkstyles.nav_link} ${navlinkstyles.nav_link__child}`}>
                    <Link href={`/${parentname}/${categorychild.slug}`}>{categorychild.name}</Link>
                </li>
            ))}
        </ul>
    )
}

