import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[90px] px-6">
        <div className="text-lg font-extralight text-logo uppercase">Photography!</div>
        <Link href='#' className="rounded-full hover:bg-opacity-90 bg-white text-stone-900 px-3 py-2 text-sm"> Get in Touch</Link>
    </header>
  )
}