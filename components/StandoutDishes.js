// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'

// const dishes = [
//   { name: 'Fattoush salad',   description: 'Description of the item', price: '$24.00', rating: 4.9, image: '/salad1.png' },
//   { name: 'Vegetable salad',  description: 'Description of the item', price: '$26.00', rating: 4.6, image: '/salad2.png' },
//   { name: 'Egg vegi salad',   description: 'Description of the item', price: '$23.00', rating: 4.5, image: '/salad3.png' },
// ]

// function StarRating({ rating }) {
//   return (
//     <div className="flex items-center gap-1.5">
//       <div className="flex gap-0.5">
//         {[1, 2, 3, 4, 5].map(s => (
//           <svg key={s} width="16" height="16" viewBox="0 0 24 24"
//             fill={s <= Math.round(rating) ? '#FCCA0D' : '#E5E7EB'}>
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//           </svg>
//         ))}
//       </div>
//       <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#555' }}>
//         {rating}
//       </span>
//     </div>
//   )
// }

// export default function StandoutDishes() {
//   const [liked, setLiked] = useState({})
//   const toggleLike = (i) => setLiked(prev => ({ ...prev, [i]: !prev[i] }))

//   return (
//     <section id="menu" className="py-20 mt-20 bg-white">
//       <div className="site-container">

//         <div className="flex items-end justify-between mb-14">
//           <div>
//             <p style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 700,
//               fontSize: 16,
//               lineHeight: 1,
//               letterSpacing: '0.175em',
//               textTransform: 'uppercase',
//               color: '#FF6868',
//               marginBottom: 16,
//             }}>
//               SPECIAL DISHES
//             </p>
//             <h2 style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 700,
//               fontSize: 'clamp(25px, 5vw, 40px)',
//               lineHeight: '132%',
//               letterSpacing: 0,
//               color: '#000',
//             }}>
//               Standout Dishes<br />From Our Menu
//             </h2>
//           </div>

//           <div className="flex gap-3 shrink-0 mb-2 mt-2">
//             <button style={{
//               width: 44, height: 44, borderRadius: '50%',
//               border: '1.5px solid #D1D5DB', background: '#fff',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               cursor: 'pointer',
//             }}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button style={{
//               width: 44, height: 44, borderRadius: '50%',
//               background: '#39DB4A', border: 'none',
//               display: 'flex', alignItems: 'center', justifyContent: 'center',
//               cursor: 'pointer',
//             }}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {dishes.map((dish, i) => (
//             <div
//               key={dish.name}
//               className="card-hover bg-white rounded-3xl overflow-hidden"
//               style={{ border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
//             >
//               <div className="relative flex items-center justify-center"
//                 style={{ height: 220, background: '#fff', padding: '20px 24px 0' }}>
//                 <Image
//                   src={dish.image}
//                   alt={dish.name}
//                   width={200}
//                   height={180}
//                   style={{ objectFit: 'contain', display: 'block' }}
//                 />

//                 {/* Heart button — exact Figma shape */}
//                 <button
//                   onClick={() => toggleLike(i)}
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0,
//                     width: 87,
//                     height: 75,
//                     background: '#39DB4A',
//                     borderTopRightRadius: 37.5,
//                     borderBottomLeftRadius: 42.5,
//                     borderTopLeftRadius: 0,
//                     borderBottomRightRadius: 0,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     border: 'none',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill={liked[i] ? '#fff' : 'none'}
//                     stroke="#fff"
//                     strokeWidth={2}
//                     style={{ marginTop: 8, marginRight: 6 }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round"
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </button>
//               </div>

//               <div style={{ padding: '20px 24px 24px' }}>
//                 <h3 style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 600,
//                   fontSize: 22,
//                   color: '#1E1E1E',
//                   // marginBottom: 6,
//                 }}>
//                   {dish.name}
//                 </h3>
//                 <p style={{
//                   fontFamily: 'Inter, sans-serif',
//                   fontWeight: 400,
//                   fontSize: 14,
//                   color: '#9CA3AF',
//                   marginBottom: 10,
//                 }}>
//                   {dish.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div style={{
//                       fontFamily: 'Inter, sans-serif',
//                       fontWeight: 700,
//                       fontSize: 16,
//                       color: '#1E1E1E',
//                       marginBottom: 6,
//                     }}>
//                       <sup style={{ fontSize: 16, fontWeight: 600 }}>$</sup>
//                       {dish.price.replace('$', '')}
//                     </div>
//                     <StarRating rating={dish.rating} />
//                   </div>
//                   <button style={{
//                     width: 44,
//                     height: 44,
//                     borderRadius: '50%',
//                     background: '#39DB4A',
//                     border: 'none',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     cursor: 'pointer',
//                   }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'
import { useState } from 'react'
import Image from 'next/image'

const dishes = [
  { name: 'Fattoush salad',   description: 'Description of the item', price: '$24.00', rating: 4.9, image: '/salad1.png' },
  { name: 'Vegetable salad',  description: 'Description of the item', price: '$26.00', rating: 4.6, image: '/salad2.png' },
  { name: 'Egg vegi salad',   description: 'Description of the item', price: '$23.00', rating: 4.5, image: '/salad3.png' },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(s => (
          <svg key={s} width="16" height="16" viewBox="0 0 24 24"
            fill={s <= Math.round(rating) ? '#FCCA0D' : '#E5E7EB'}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#555' }}>
        {rating}
      </span>
    </div>
  )
}

export default function StandoutDishes() {
  const [liked, setLiked] = useState({})
  const toggleLike = (i) => setLiked(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <section id="menu" className="py-28 bg-white">
      <div className="site-container">

        <div className="flex items-end justify-between mb-14">
          <div>
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
              SPECIAL DISHES
            </p>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(25px, 5vw, 40px)',
              lineHeight: '132%',
              letterSpacing: 0,
              color: '#000',
            }}>
              Standout Dishes<br />From Our Menu
            </h2>
          </div>

          <div className="flex gap-3 shrink-0 mb-2 mt-2">
            <button style={{
              width: 44, height: 44, borderRadius: '50%',
              border: '1.5px solid #D1D5DB', background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button style={{
              width: 44, height: 44, borderRadius: '50%',
              background: '#39DB4A', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className="card-hover bg-white rounded-3xl overflow-hidden"
              style={{ border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}
            >
              <div className="relative flex items-center justify-center"
                style={{ height: 220, background: '#fff', padding: '20px 24px 0' }}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={200}
                  height={180}
                  style={{ objectFit: 'contain', display: 'block' }}
                />

                {/* Heart button — exact Figma shape */}
                <button
                  onClick={() => toggleLike(i)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 87,
                    height: 75,
                    background: '#39DB4A',
                    borderTopRightRadius: 37.5,
                    borderBottomLeftRadius: 42.5,
                    borderTopLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={liked[i] ? '#fff' : 'none'}
                    stroke="#fff"
                    strokeWidth={2}
                    style={{ marginTop: 8, marginRight: 6 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#1E1E1E',
                  // marginBottom: 6,
                }}>
                  {dish.name}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#9CA3AF',
                  marginBottom: 10,
                }}>
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: 16,
                      color: '#1E1E1E',
                      marginBottom: 6,
                    }}>
                      <sup style={{ fontSize: 16, fontWeight: 600 }}>$</sup>
                      {dish.price.replace('$', '')}
                    </div>
                    <StarRating rating={dish.rating} />
                  </div>
                  <button style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: '#39DB4A',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}