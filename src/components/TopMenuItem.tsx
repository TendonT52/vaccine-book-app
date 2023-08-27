import Link from 'next/link'

export default function TopMenuItem({title, pageRef} : {title: string, pageRef: string}) {
    return (
        <Link className="w-120 text-center my-auto font-sans text-gray-500 mx-8 text-xl" href={pageRef}>
            {title}
        </Link>
    )
}