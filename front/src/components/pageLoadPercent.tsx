// import React, { useEffect, useState } from "react";
// import { TfiAngleUp } from "react-icons/tfi";
// const PageLoadButton = () => {
//   const [showPageLoadButton, setShowPageLoadButton] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const windowHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercentage = (scrollTop / windowHeight) * 100;
//       setScrollProgress(scrollPercentage);

//       if (scrollTop > 300) {
//         setShowPageLoadButton(true);
//       } else {
//         setShowPageLoadButton(false);
//       }
//     };

//     const onScroll = () => {
//       requestAnimationFrame(handleScroll);
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div>
//       {showPageLoadButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-20 right-6 w-[50px] h-[50px] bg-white text-xl flex items-center justify-center rounded-full shadow-md transition"
//         >
//           <TfiAngleUp className="absolute text-black" />
//           <div
//             className="bg-black w-full h-full rounded-full flex items-center justify-center"
//             style={{
//               clipPath: `inset(${100 - scrollProgress}% 0 0 0)`,
//             }}
//           >
//             <TfiAngleUp className="absolute text-white" />
//           </div>
//         </button>
//       )}
//     </div>
//   );
// };

// export default PageLoadButton;
