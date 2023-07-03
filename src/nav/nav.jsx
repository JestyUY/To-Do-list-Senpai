import ButtonMode from "../ButtonMode/ButtonMode";
import Logo from "../logo/logo";

function NavBar() {
  return (
    
      <nav className=" flex justify-between lg:w-[30%] mx-auto h-10 w-4/5  lg:mt-14  mt-10">
        <Logo />
        <ButtonMode/>
      </nav>
    
  );
}

export default NavBar