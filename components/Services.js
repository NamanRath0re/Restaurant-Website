// 'use client'
// import Image from 'next/image'

// const services = [
//   {
//     image: '/catering.png',
//     title: 'Catering',
//     description: 'Delight your guests with our flavors and presentation',
//   },
//   {
//     image: '/fast-delivery.png',
//     title: 'Fast Delivery',
//     description: 'We deliver your order promptly to your door',
//   },
//   {
//     image: '/cart-check.png',
//     title: 'Online Ordering',
//     description: 'Explore menu & order with ease using our Online Ordering',
//   },
//   {
//     image: '/gift-card.png',
//     title: 'Gift Cards',
//     description: 'Give the gift of exceptional dining with Foodi Gift Cards',
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-24 bg-white">
//       <div className="site-container">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left — Text */}
//           <div>
//             <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-4">
//               OUR STORY & SERVICES
//             </p>
//             <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-6">
//               Our Culinary Journey<br />And Services
//             </h2>
//             <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
//               Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
//             </p>
//             <button className="bg-[#39DB4A] text-white font-semibold rounded-full px-8 py-3.5 border-none cursor-pointer">
//               Explore
//             </button>
//           </div>

//           {/* Right — Services grid */}
//           <div className="grid grid-cols-2 gap-5">
//             {services.map((svc) => (
//               <div
//                 key={svc.title}
//                 className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
//               >
//                 <div className="w-16 h-16 mb-4 flex items-center justify-center">
//                   <Image
//                     src={svc.image}
//                     alt={svc.title}
//                     width={56}
//                     height={56}
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="font-bold text-[13px] tracking-[0.1em] uppercase text-[#1E1E1E] mb-2">
//                   {svc.title}
//                 </h3>
//                 <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import Image from 'next/image'

const services = [
  {
    image: '/catering.png',
    title: 'Catering',
    description: 'Delight your guests with our flavors and presentation',
  },
  {
    image: '/fast-delivery.png',
    title: 'Fast Delivery',
    description: 'We deliver your order promptly to your door',
  },
  {
    image: '/cart-check.png',
    title: 'Online Ordering',
    description: 'Explore menu & order with ease using our Online Ordering',
  },
  {
    image: '/gift-card.png',
    title: 'Gift Cards',
    description: 'Give the gift of exceptional dining with Foodi Gift Cards',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white" style={{ padding: '112px 0' }}>
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="font-bold text-[13px] tracking-[0.175em] uppercase text-[#FF6868] mb-4">
              OUR STORY & SERVICES
            </p>
            <h2 className="font-bold text-[clamp(32px,4vw,48px)] leading-[130%] text-black mb-6">
              Our Culinary Journey<br />And Services
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
            </p>
            <button className="bg-[#39DB4A] text-white font-semibold rounded-full px-8 py-3.5 border-none cursor-pointer">
              Explore
            </button>
          </div>

          {/* Right — Services grid */}
          <div className="grid grid-cols-2 gap-5">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-[13px] tracking-[0.1em] uppercase text-[#1E1E1E] mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}