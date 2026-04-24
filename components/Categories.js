// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// const categories = [
//   { name: 'Main Dish',  count: '(86 dishes)',     image: '/burger.png',   circleBg: '#C1F1C6' },
//   { name: 'Break Fast', count: '(12 break fast)', image: '/sandwich.png', circleBg: '#C1F1C6' },
//   { name: 'Dessert',    count: '(48 dessert)',     image: '/icecream.png', circleBg: '#C1F1C6' },
//   { name: 'Browse All', count: '(255 Items)',      image: '/juice.png',    circleBg: '#C1F1C6' },
// ]

// export default function Categories() {
//   const [active, setActive] = useState(null)

//   return (
//     <section className="py-20 bg-white">
//       <div className="site-container">

//         <div className="text-center mb-14">
//           <p style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 700,
//             fontSize: 16,
//             lineHeight: 1,
//             letterSpacing: '0.175em',
//             textTransform: 'uppercase',
//             color: '#FF6868',
//             marginBottom: 16,
//           }}>
//             CUSTOMER FAVORITES
//           </p>
//           <h2 style={{
//             fontFamily: 'Inter, sans-serif',
//             fontWeight: 700,
//             fontSize: 'clamp(30px, 5vw, 50px)',
//             lineHeight: 1,
//             letterSpacing: 0,
//             textAlign: 'center',
//             color: '#000',
//           }}>
//             Popular Categories
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {categories.map((cat, i) => (
//             <button
//               key={cat.name}
//               onClick={() => setActive(i)}
//               className="flex flex-col items-center gap-5 rounded-2xl transition-all duration-200"
//               style={{
//                 padding: '32px 20px',
//                 background: '#fff',
//                 border: active === i ? '2px solid #39DB4A' : '2px solid #F3F4F6',
//                 boxShadow: active === i
//                   ? '0 8px 30px rgba(57,219,74,0.15)'
//                   : '0 2px 12px rgba(0,0,0,0.06)',
//                 cursor: 'pointer',
//               }}
//             >
//               <div style={{
//                 width: 96,
//                 height: 96,
//                 borderRadius: '50%',
//                 background: cat.circleBg,
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 overflow: 'hidden',
//               }}>
//                 <Image src={cat.image} alt={cat.name} width={64} height={64} style={{ objectFit: 'contain' }} />
//               </div>

//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 600,
//                 fontSize: 'clamp(18px, 2vw, 30px)',
//                 lineHeight: 1,
//                 letterSpacing: 0,
//                 textAlign: 'center',
//                 color: '#1E1E1E',
//               }}>
//                 {cat.name}
//               </span>

//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 500,
//                 fontSize: 'clamp(14px, 1.5vw, 22px)',
//                 lineHeight: 1,
//                 letterSpacing: 0,
//                 textAlign: 'center',
//                 color: '#555555',
//               }}>
//                 {cat.count}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'
import { useState } from 'react'
import Image from 'next/image'

const categories = [
  { name: 'Main Dish',  count: '(86 dishes)',     image: '/burger.png',   circleBg: '#C1F1C6' },
  { name: 'Break Fast', count: '(12 break fast)', image: '/sandwich.png', circleBg: '#C1F1C6' },
  { name: 'Dessert',    count: '(48 dessert)',     image: '/icecream.png', circleBg: '#C1F1C6' },
  { name: 'Browse All', count: '(255 Items)',      image: '/juice.png',    circleBg: '#C1F1C6' },
]

export default function Categories() {
  const [active, setActive] = useState(null)

  return (
    <section className="py-28 bg-white">
      <div className="site-container">

        <div className="text-center mb-14">
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1,
            letterSpacing: '0.175em',
            textTransform: 'uppercase',
            color: '#FF6868',
            marginBottom: 16,
          }}>
            CUSTOMER FAVORITES
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(30px, 5vw, 50px)',
            lineHeight: 1,
            letterSpacing: 0,
            textAlign: 'center',
            color: '#000',
          }}>
            Popular Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-5 rounded-2xl transition-all duration-200"
              style={{
                padding: '32px 20px',
                background: '#fff',
                border: active === i ? '2px solid #39DB4A' : '2px solid #F3F4F6',
                boxShadow: active === i
                  ? '0 8px 30px rgba(57,219,74,0.15)'
                  : '0 2px 12px rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                background: cat.circleBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <Image src={cat.image} alt={cat.name} width={64} height={64} style={{ objectFit: 'contain' }} />
              </div>

              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(18px, 2vw, 30px)',
                lineHeight: 1,
                letterSpacing: 0,
                textAlign: 'center',
                color: '#1E1E1E',
              }}>
                {cat.name}
              </span>

              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(14px, 1.5vw, 22px)',
                lineHeight: 1,
                letterSpacing: 0,
                textAlign: 'center',
                color: '#555555',
              }}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}