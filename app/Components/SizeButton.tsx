const SizeButton = (props) => {
  return (
    <button className=" w-10 h-10 bg-neutral-100 text-center p-2.5 xl:text-sm border border-neutral-200 rounded max-md:w-6 max-md:h-6 max-md:p-0.5 sm:text-xs">
      {props.size}
    </button>
  );
};

export default SizeButton;
