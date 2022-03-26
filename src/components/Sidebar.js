import { useState, useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { useLoaded } from "../hooks/useLoaded";

export default function Sidebar() {
  const loaded = useLoaded();
  const [currentYear, setCurrentYear] = useState('')
  const [colorTheme, setTheme] = useDarkMode();

  function getDate() {
      let date = new Date();
      let year = date.getFullYear();
      setCurrentYear(year);
    }

  var focusDiv = typeof document === 'undefined' ? null : document.getElementById("focus");
  
  function scrollToFocus() {
    focusDiv.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  
    useEffect(() => {
      getDate();
    }, [])    

    return (
        <div className='flex md:w-1/5  justify-center items-center h-screen'>
            <div className='text-center'>
              <div className='font-extrabold text-2xl font-sans block'>
              grant nelson
              </div>
                <ul>
                <li className='mt-2'><a href='/'>projects</a></li>
                <li className='mt-2'><a href='/about'>about</a></li>
                <li className='mt-2'><a href='/contact'>contact</a></li>
                </ul>
              <div className='font-thin text-xs mt-4'>© {currentYear}</div>

              <div className='flex items-center justify-center pt-10'>
                <span onClick={() => setTheme(colorTheme)} className='cursor-pointer transition duration-300'>
                {loaded && colorTheme === 'dark' ? 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                }
                </span>
              </div>

              <div className='md:invisible text-sm h-full flex justify-center items-center italic pt-10 animate-bounce'>
                <a onClick={scrollToFocus} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg></a>
              </div>
            </div>
          </div>
    )
}
