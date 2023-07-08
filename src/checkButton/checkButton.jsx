const checkLogo = <svg className="" xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FaFaFa" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
function CheckButton () {

    

    return(
        <button className=" my-auto scale-75 h-9 w-9 items-center flex justify-center rounded-full bg-gradient-to-br from-brightBlue to-pinkGrad ">{checkLogo}</button>
    )
}


export default CheckButton