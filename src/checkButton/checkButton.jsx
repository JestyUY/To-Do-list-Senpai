// eslint-disable-next-line react/prop-types
function CheckButton({ gradient, onClick, logo }) {
  return (
    <button
      onClick={onClick}
      className={` border border-lightGrayishBlue hover:border-veryDarkGrayishBlue  my-auto scale-75 h-9 w-9 items-center flex justify-center rounded-full   ${gradient}  `}
    >
      {logo}
    </button>
  );
}

export default CheckButton;
