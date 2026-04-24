// 'use client'
// import { useEffect, useRef } from 'react'
// import Image from 'next/image'

// export default function Hero() {
//   const heroRef = useRef(null)

//   useEffect(() => {
//     const el = heroRef.current
//     if (el) {
//       el.style.opacity = '0'
//       setTimeout(() => {
//         el.style.transition = 'opacity 0.8s ease'
//         el.style.opacity = '1'
//       }, 100)
//     }
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative flex items-center overflow-hidden pt-[90px] pb-10"
//       style={{ minHeight: '100vh', background: '#fff' }}
//       ref={heroRef}
//     >
//       <div className="site-container">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

//           {/* LEFT CONTENT */}
//           <div className="flex flex-col">
//             {/* Label */}
//             <div className="flex items-center gap-2 mb-8 ">
//               <span className="text-xl">🎉</span>
//               <span style={{
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 700,
//                 fontSize: 16,
//                 lineHeight: 1,
//                 letterSpacing: '0.175em',
//                 textTransform: 'uppercase',
//                 color: '#FF6868',
//               }}>
//                 BEST FOOD IN TOWN
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 600,
//               fontSize: 'clamp(32px, 5vw, 52px)',
//               lineHeight: '100%',
//               letterSpacing: 0,
//               color: '#000',
//               marginBottom: 24,
//             }}>
//               Dive into Delights<br />
//               Of Delectable <span style={{ color: '#39DB4A' }}>Food</span><br />
//             </h1>

//             {/* Subtitle */}
//             <p style={{
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 500,
//               fontSize: 'clamp(14px, 2vw, 20px)',
//               lineHeight: '171%',
//               letterSpacing: 0,
//               color: '#4A4A4A',
//               marginBottom: 40,
//             }}>
//               Where Each Plate Weaves a Story<br />
//               of Culinary Mastery and Passionate Craftsmanship
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-6 mb-12">
//               <button style={{
//                 background: '#39DB4A',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: 9999,
//                 padding: '14px 36px',
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 600,
//                 fontSize: 18,
//                 cursor: 'pointer',
//               }}>
//                 Order Now
//               </button>

//               <button className="flex items-center gap-3" style={{
//                 background: 'transparent',
//                 border: 'none',
//                 cursor: 'pointer',
//                 fontFamily: 'Inter, sans-serif',
//                 fontWeight: 500,
//                 fontSize: 18,
//                 color: '#1E1E1E',
//               }}>
//                 Watch Video
//                 <div style={{
//                   width: 48,
//                   height: 48,
//                   borderRadius: '50%',
//                   background: '#39DB4A',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   boxShadow: '0 4px 14px rgba(57,219,74,0.4)',
//                 }}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
//                     <path d="M8 5v14l11-7z"/>
//                   </svg>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: Girl + Green circle + cards */}
//           <div className="relative flex justify-center items-end" style={{ minHeight: 540 }}>

//             {/* Green circle */}
//             <div style={{
//               position: 'absolute',
//               width: 480,
//               height: 480,
//               borderRadius: '50%',
//               background: '#39DB4A',
//               bottom: 0,
//               left: '50%',
//               transform: 'translateX(-50%)',
//               zIndex: 0,
//             }} />

//             {/* Hot spicy Food tag */}
//             <div style={{
//               position: 'absolute',
//               top: 60,
//               left: '8%',
//               background: '#fff',
//               borderRadius: 12,
//               padding: '10px 18px',
//               boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//               zIndex: 20,
//               display: 'flex',
//               alignItems: 'center',
//               gap: 8,
//               fontFamily: 'Inter, sans-serif',
//               fontWeight: 600,
//               fontSize: 20,
//               lineHeight: 1,
//               color: '#FF6868',
//               whiteSpace: 'nowrap',
//             }}>
//               Hot spicy Food 🌶
//             </div>

//             {/* Girl image */}
//             <div style={{ position: 'relative', zIndex: 10 }}>
//               <Image
//                 src="/girl.png"
//                 alt="Chef girl holding food"
//                 width={440}
//                 height={520}
//                 style={{ objectFit: 'contain', objectPosition: 'bottom', display: 'block' }}
//                 priority
//               />
//             </div>

//             {/* Spicy noodles card */}
//             <div style={{
//               position: 'absolute',
//               bottom: 60,
//               left: '0%',
//               background: '#fff',
//               borderRadius: 16,
//               padding: '12px 16px',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 14,
//               zIndex: 30,
//               minWidth: 200,
//               animation: 'float 3s ease-in-out infinite',
//             }}>
//               <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
//                 <Image src="/spicy_noodles.png" alt="Spicy noodles" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
//                   Spicy noodles
//                 </div>
//                 <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
//                   {[1,2,3,4,5].map(s => (
//                     <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
//                   <sup style={{ fontSize: 12 }}>$</sup>18.00
//                 </div>
//               </div>
//             </div>

//             {/* Vegetarian salad card */}
//             <div style={{
//               position: 'absolute',
//               bottom: 60,
//               right: '0%',
//               background: '#fff',
//               borderRadius: 16,
//               padding: '12px 16px',
//               boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
//               display: 'flex',
//               alignItems: 'center',
//               gap: 14,
//               zIndex: 30,
//               minWidth: 210,
//               animation: 'float 3s ease-in-out infinite',
//               animationDelay: '1.2s',
//             }}>
//               <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
//                 <Image src="/salad.png" alt="Vegetarian salad" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//               </div>
//               <div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
//                   Vegetarian salad
//                 </div>
//                 <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
//                   {[1,2,3,4,5].map(s => (
//                     <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
//                   <sup style={{ fontSize: 12 }}>$</sup>23.00
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
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) {
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease'
        el.style.opacity = '1'
      }, 100)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-[90px] pb-20"
      style={{ minHeight: '100vh', background: '#fff' }}
      ref={heroRef}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-2 mb-8 ">
              <span className="text-xl">🎉</span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1,
                letterSpacing: '0.175em',
                textTransform: 'uppercase',
                color: '#FF6868',
              }}>
                BEST FOOD IN TOWN
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: '100%',
              letterSpacing: 0,
              color: '#000',
              marginBottom: 24,
            }}>
              Dive into Delights<br />
              Of Delectable <span style={{ color: '#39DB4A' }}>Food</span><br />
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 2vw, 20px)',
              lineHeight: '171%',
              letterSpacing: 0,
              color: '#4A4A4A',
              marginBottom: 40,
            }}>
              Where Each Plate Weaves a Story<br />
              of Culinary Mastery and Passionate Craftsmanship
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button style={{
                background: '#39DB4A',
                color: '#fff',
                border: 'none',
                borderRadius: 9999,
                padding: '14px 36px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                cursor: 'pointer',
              }}>
                Order Now
              </button>

              <button className="flex items-center gap-3" style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 18,
                color: '#1E1E1E',
              }}>
                Watch Video
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#39DB4A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(57,219,74,0.4)',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT: Girl + Green circle + cards */}
          <div className="relative flex justify-center items-end" style={{ minHeight: 540 }}>

            {/* Green circle */}
            <div style={{
              position: 'absolute',
              width: 480,
              height: 480,
              borderRadius: '50%',
              background: '#39DB4A',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 0,
            }} />

            {/* Hot spicy Food tag */}
            <div style={{
              position: 'absolute',
              top: 60,
              left: '8%',
              background: '#fff',
              borderRadius: 12,
              padding: '10px 18px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 20,
              lineHeight: 1,
              color: '#FF6868',
              whiteSpace: 'nowrap',
            }}>
              Hot spicy Food 🌶
            </div>

            {/* Girl image */}
            <div style={{ position: 'relative', zIndex: 10 }}>
              <Image
                src="/girl.png"
                alt="Chef girl holding food"
                width={440}
                height={520}
                style={{ objectFit: 'contain', objectPosition: 'bottom', display: 'block' }}
                priority
              />
            </div>

            {/* Spicy noodles card */}
            <div style={{
              position: 'absolute',
              bottom: 60,
              left: '0%',
              background: '#fff',
              borderRadius: 16,
              padding: '12px 16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              zIndex: 30,
              minWidth: 200,
              animation: 'float 3s ease-in-out infinite',
            }}>
              <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/spicy_noodles.png" alt="Spicy noodles" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
                  Spicy noodles
                </div>
                <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
                  <sup style={{ fontSize: 12 }}>$</sup>18.00
                </div>
              </div>
            </div>

            {/* Vegetarian salad card */}
            <div style={{
              position: 'absolute',
              bottom: 60,
              right: '0%',
              background: '#fff',
              borderRadius: 16,
              padding: '12px 16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              zIndex: 30,
              minWidth: 210,
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '1.2s',
            }}>
              <div style={{ width: 60, height: 60, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/salad.png" alt="Vegetarian salad" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 22, lineHeight: 1, color: '#1E1E1E' }}>
                  Vegetarian salad
                </div>
                <div style={{ display: 'flex', gap: 2, margin: '6px 0 4px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= 4 ? '#FCCA0D' : '#E5E7EB'}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18, color: '#1E1E1E' }}>
                  <sup style={{ fontSize: 12 }}>$</sup>23.00
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}