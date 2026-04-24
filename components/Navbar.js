'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
    }`}>
      <div className="site-container flex items-center justify-between  py-2">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: 34, height: 41, background: '#39DB4A', borderRadius: 8 }}
          >
            <Image src="/F.png" alt="F" width={20} height={26} style={{ objectFit: 'contain' }} />
          </div>
          <Image src="/oodi.png" alt="oodi" width={60} height={28} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Menu', href: '#menu' },
            { label: 'Services', href: '#services' },
            { label: 'Offers', href: '#offers' },
          ].map((item, i) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="nav-link transition-colors hover:text-green-500"
                style={{
                  color: i === 0 ? '#39DB4A' : '#1E1E1E',
                  borderBottom: i === 0 ? '2px solid #39DB4A' : 'none',
                  paddingBottom: i === 0 ? 4 : 0,
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center justify-center" style={{ width: 32, height: 32 }}>
            <Image src="/search_icon.png" alt="Search" width={32} height={32} style={{ objectFit: 'contain' }} />
          </button>

          <button className="relative flex items-center justify-center" style={{ width: 24, height: 24 }}>
            <Image src="/cart_icon.png" alt="Cart" width={24} height={24} style={{ objectFit: 'contain' }} />
            <span
              className="absolute flex items-center justify-center text-white font-bold"
              style={{ top: -8, right: -8, width: 18, height: 18, background: '#39DB4A', borderRadius: '50%', fontSize: 10 }}
            >
              2
            </span>
          </button>

          <button
            className="flex items-center gap-2 text-white font-semibold"
            style={{ background: '#39DB4A', borderRadius: 9999, padding: '10px 20px', fontSize: 16, border: 'none', cursor: 'pointer' }}
          >
            <Image src="/phone-call.png" alt="Phone" width={18} height={18} style={{ objectFit: 'contain' }} />
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 rounded-lg text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Home', 'Menu', 'Services', 'Offers'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="nav-link text-gray-700 hover:text-green-500" onClick={() => setMobileOpen(false)}>
              {item}
            </Link>
          ))}
          <button className="flex items-center justify-center gap-2 text-white font-semibold rounded-full py-2.5" style={{ background: '#39DB4A' }}>
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}