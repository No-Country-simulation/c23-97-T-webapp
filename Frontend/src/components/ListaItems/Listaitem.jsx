import React, {useState} from 'react'

export const Listaitem = ({children}) => {
  const [menu, setMenu] = useState(children)
  return (    
    <li onClick={()=>{setMenu(children)}}>{children}{menu===children?<hr/>:<></>}</li>    
  )
}

export default Listaitem;