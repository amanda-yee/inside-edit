'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname()
  
    return (   
        <ul className="sm:text-lg">
            <li>
              <Link href="/projects" className={pathname === '/projects' ? 'font-bold' : 'hover:font-bold'} >projects</Link>
            </li>
            <li>
              <Link href="/collaborations" className={pathname === '/collaborations' ? 'font-bold' : 'hover:font-bold'}>collaborations</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'font-bold' : 'hover:font-bold'}>about</Link>
            </li>
        </ul>
        
    )
}