import React from 'react'
interface props{
    children:React.ReactNode,
    className?:String
}

function Container({children,className}:props) {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-2 xl:px-0 py-2 `}>
        {children}
    </div>
  )
}

export default Container