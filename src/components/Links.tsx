import Link from "next/link"

export default function Links() {
    return (   
        <ul className="text-lg">
            <li>
              <Link className="hover:underline" href="/projects">projects</Link>
            </li>
            <li>
              <Link className="hover:underline" href="/collaborations">collaborations</Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">about</Link>
            </li>
          </ul>
    )
}