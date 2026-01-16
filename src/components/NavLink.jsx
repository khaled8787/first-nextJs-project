'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    return (
        <Link className={`${pathName.startsWith(href) && 'bg-sky-600 py-2 px-3'}`} href={href}>{children}</Link>
    );
};

export default NavLink;