const checkLogo = <svg className="" xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FaFaFa" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
// eslint-disable-next-line react/prop-types
function CheckButton ({gradient,onClick }) {
     

  
        
    
    
    return(
        <button onClick={onClick} className={` border border-lightGrayishBlue hover:border-veryDarkGrayishBlue  my-auto scale-75 h-9 w-9 items-center flex justify-center rounded-full   ${gradient}  `}>{checkLogo}</button>
    )
}


export default CheckButton