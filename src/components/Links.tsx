import Link from "next/link"

export default function Links() {
    return (   
        <ul className="text-lg">
            <li>
              <Link className="hover:font-bold" href="/projects">projects</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/collaborations">collaborations</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/about">about</Link>
            </li>
          </ul>
    )
}