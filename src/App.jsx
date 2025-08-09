import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const [themeMode,setThemeMode]=useState("light");
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn/>
          </div>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <Card/>
          </div>
        </div>
      </div>
     
    </ThemeProvider>
  )
}

export default App
