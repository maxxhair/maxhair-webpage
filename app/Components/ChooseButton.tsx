const ChooseButton = (props) => {
  return (
    <button className="xl:pl-6 xl:pr-6 xl:h-10 bg-neutral-100 text-center xl:p-2.5 xl:text-sm border border-neutral-200 rounded sm:pl-2.5 sm:pr-2.5 sm:text-xs sm:h-6">
      {props.desc}
    </button>
  );
};

export default ChooseButton;
