// import Link from 'next/link'
// import Image from 'next/image'

// const footerLinks = {
//   'Useful links': ['About us', 'Events', 'Blogs', 'FAQ'],
//   'Main Menu': ['Home', 'Offers', 'Menus', 'Reservation'],
//   'Contact Us': ['example@email.com', '+64 958 248 966', 'Social media'],
// }

// export default function Footer() {
//   return (
//     <footer className="pt-16 pb-8 bg-white border-t border-gray-100">
//       <div className="site-container">

//         {/* Top row */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

//           {/* Brand */}
//           <div className="col-span-2 md:col-span-1">
//             <Link href="/" className="flex items-center gap-1 mb-5">
//               <div className="w-9 h-9 bg-[#39DB4A] rounded-lg flex items-center justify-center">
//                 <Image src="/F.png" alt="F" width={20} height={20} className="object-contain" />
//               </div>
//               <Image src="/oodi.png" alt="oodi" width={56} height={24} className="object-contain" />
//             </Link>
//             <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
//               Savor the artistry where every dish is a culinary masterpiece
//             </p>
//           </div>

//           {/* Link columns */}
//           {Object.entries(footerLinks).map(([title, links]) => (
//             <div key={title}>
//               <h4 className="font-bold text-[#1E1E1E] text-base mb-5">{title}</h4>
//               <ul className="space-y-3">
//                 {links.map(link => (
//                   <li key={link}>
//                     <Link href="#" className="text-gray-500 text-sm hover:text-[#39DB4A] transition-colors">
//                       {link}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom row */}
//         <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

//           {/* Social icons */}
//           <div className="flex items-center gap-4">
//             {/* Facebook */}
//             <a href="#" className="w-10 h-10 rounded-full bg-[#39DB4A] flex items-center justify-center text-white hover:bg-[#2db83d] transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//               </svg>
//             </a>
//             {/* Instagram */}
//             <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//                 <circle cx="12" cy="12" r="4"/>
//                 <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
//               </svg>
//             </a>
//             {/* Twitter */}
//             <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
//               </svg>
//             </a>
//             {/* YouTube */}
//             <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
//               </svg>
//             </a>
//           </div>

//           {/* Copyright */}
//           <p className="text-gray-400 text-sm text-center">
//             Copyright © 2023 Dscode | All rights reserved
//           </p>
//         </div>

//       </div>
//     </footer>
//   )
// }


import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  'Useful links': ['About us', 'Events', 'Blogs', 'FAQ'],
  'Main Menu': ['Home', 'Offers', 'Menus', 'Reservation'],
  'Contact Us': ['example@email.com', '+64 958 248 966', 'Social media'],
}

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white border-t border-gray-100">
      <div className="site-container">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-5">
              <div className="w-9 h-9 bg-[#39DB4A] rounded-lg flex items-center justify-center">
                <Image src="/F.png" alt="F" width={20} height={20} className="object-contain" />
              </div>
              <Image src="/oodi.png" alt="oodi" width={56} height={24} className="object-contain" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[180px]">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-[#1E1E1E] text-base mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-gray-500 text-sm hover:text-[#39DB4A] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-[#39DB4A] flex items-center justify-center text-white hover:bg-[#2db83d] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#39DB4A] hover:text-[#39DB4A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            Copyright © 2023 Dscode | All rights reserved
          </p>
        </div>

      </div>
    </footer>
  )
}