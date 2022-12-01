import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex top-0 fixed w-full z-30 justify-between items-center h-[90px] px-10 bg-stone-900 bg-opacity-90">
        <span className="text-lg font-extralight text-logo uppercase">Photography!</span>
        <Link href='#' className="rounded-full hover:bg-opacity-90 bg-white text-stone-900 px-3 py-2 text-xs uppercase"> Get in Touch</Link>
    </header>
  )
}