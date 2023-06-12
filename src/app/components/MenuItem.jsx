import Link from "next/link";

export default function MenuItem({title,link,Icon}) {
  return (
    <div>
        <Link href={link} className="mx-4 flex lg:mx-6 hover:text-amber-600">
            <Icon className="text-2xl md:hidden mx-4"/>
            <p className="hidden md:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}
