// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// const testimonials = [
//   {
//     name: 'Customer Feedback',
//     role: 'Regular Customer',
//     text: "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable",
//     rating: 4.9,
//     reviews: '18.6k',
//     image: '/customer1.png',
//   },
//   {
//     name: 'Sarah Mitchell',
//     role: 'Food Blogger',
//     text: "Absolutely incredible experience! Every dish was a masterpiece. The flavors, presentation, and service exceeded all my expectations. Will definitely be back!",
//     rating: 5.0,
//     reviews: '12.1k',
//     image: '/customer2.png',
//   },
//   {
//     name: 'James Rodriguez',
//     role: 'Chef Enthusiast',
//     text: "The culinary craftsmanship here is outstanding. Each plate tells a story of passion and dedication. Foodi has set a new standard for dining excellence.",
//     rating: 4.8,
//     reviews: '8.4k',
//     image: '/customer3.png',
//   },
// ]

// export default function Testimonials() {
//   const [active, setActive] = useState(0)
//   const t = testimonials[active]

//   return (
//     <section className="py-20 bg-[#f9f9f9]">
//       <div className="max-w-[1200px] mx-auto px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left — Chef image */}
//           <div className="relative flex items-end justify-center">
//             {/* Green blob behind chef */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[320px] bg-[#39DB4A] rounded-[60%_40%_55%_45%_/_50%_60%_40%_50%]" />

//             {/* Decorative emoji badges */}
//             {/* <div className="absolute top-[30%] left-[5%] text-3xl z-10">😊</div> */}
//             <div className="absolute top-[20%] right-[8%] text-3xl z-10">🍕</div>

//             {/* Chef image */}
//             <div className="relative z-10">
//               <Image
//                 src="/cheif.png"
//                 alt="Our Best Chef"
//                 width={320}
//                 height={400}
//                 className="object-contain object-bottom block"
//               />
//             </div>

//             {/* "Our Best Chef" badge */}
//             <div className="absolute bottom-4 right-[5%] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
//               <span className="text-xl">👨‍🍳</span>
//               <span className="font-semibold text-sm text-gray-800">Our Best Chef</span>
//             </div>
//           </div>

//           {/* Right — Testimonial */}
//           <div>
//             <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-3">
//               TESTIMONIALS
//             </p>
//             <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-8">
//               What Our Customers<br />Say About Us
//             </h2>

//             {/* Quote */}
//             <p className="text-gray-600 leading-relaxed text-base mb-8">
//               "{t.text}"
//             </p>

//             {/* Customer info + rating */}
//             <div className="flex items-center gap-4 mb-8">
//               {/* Stacked avatars */}
//               <div className="flex -space-x-3">
//                 {testimonials.map((tc, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActive(i)}
//                     className={`w-11 h-11 rounded-full overflow-hidden border-2 border-white transition-all duration-200 ${
//                       active === i ? 'scale-110 z-10 ring-2 ring-[#39DB4A]' : 'opacity-80 hover:opacity-100'
//                     }`}
//                     style={{ zIndex: active === i ? 10 : testimonials.length - i }}
//                   >
//                     <Image src={tc.image} alt={tc.name} width={44} height={44} className="object-cover w-full h-full" />
//                   </button>
//                 ))}
//               </div>

//               {/* Name + rating */}
//               <div>
//                 <div className="font-bold text-gray-900">{t.name}</div>
//                 <div className="flex items-center gap-1.5 mt-0.5">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                   <span className="font-bold text-sm text-gray-800">{t.rating}</span>
//                   <span className="text-sm text-gray-400">({t.reviews} Reviews)</span>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Customer Feedback',
    role: 'Regular Customer',
    text: "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable",
    rating: 4.9,
    reviews: '18.6k',
    image: '/customer1.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    text: "Absolutely incredible experience! Every dish was a masterpiece. The flavors, presentation, and service exceeded all my expectations. Will definitely be back!",
    rating: 5.0,
    reviews: '12.1k',
    image: '/customer2.png',
  },
  {
    name: 'James Rodriguez',
    role: 'Chef Enthusiast',
    text: "The culinary craftsmanship here is outstanding. Each plate tells a story of passion and dedication. Foodi has set a new standard for dining excellence.",
    rating: 4.8,
    reviews: '8.4k',
    image: '/customer3.png',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="py-28 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Chef image */}
          <div className="relative flex items-end justify-center">
            {/* Green blob behind chef */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[320px] bg-[#39DB4A] rounded-[60%_40%_55%_45%_/_50%_60%_40%_50%]" />

            {/* Decorative emoji badges */}
            {/* <div className="absolute top-[30%] left-[5%] text-3xl z-10">😊</div> */}
            <div className="absolute top-[20%] right-[8%] text-3xl z-10">🍕</div>

            {/* Chef image */}
            <div className="relative z-10">
              <Image
                src="/cheif.png"
                alt="Our Best Chef"
                width={320}
                height={400}
                className="object-contain object-bottom block"
              />
            </div>

            {/* "Our Best Chef" badge */}
            <div className="absolute bottom-4 right-[5%] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2">
              <span className="text-xl">👨‍🍳</span>
              <span className="font-semibold text-sm text-gray-800">Our Best Chef</span>
            </div>
          </div>

          {/* Right — Testimonial */}
          <div>
            <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-3">
              TESTIMONIALS
            </p>
            <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-8">
              What Our Customers<br />Say About Us
            </h2>

            {/* Quote */}
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              "{t.text}"
            </p>

            {/* Customer info + rating */}
            <div className="flex items-center gap-4 mb-8">
              {/* Stacked avatars */}
              <div className="flex -space-x-3">
                {testimonials.map((tc, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-11 h-11 rounded-full overflow-hidden border-2 border-white transition-all duration-200 ${
                      active === i ? 'scale-110 z-10 ring-2 ring-[#39DB4A]' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ zIndex: active === i ? 10 : testimonials.length - i }}
                  >
                    <Image src={tc.image} alt={tc.name} width={44} height={44} className="object-cover w-full h-full" />
                  </button>
                ))}
              </div>

              {/* Name + rating */}
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-bold text-sm text-gray-800">{t.rating}</span>
                  <span className="text-sm text-gray-400">({t.reviews} Reviews)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}