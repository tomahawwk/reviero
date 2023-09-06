const ModalLeftView = (props: any) => {
  return (
    <div
      className={`absolute top-0 left-0 ease-cubic duration-[600ms] transition h-screen wrapper
      w-screen py-md overflow-y-auto bg-white${!props.showModal ? ' translate-x-[-100vw]' : ''
      }`}>
      {props.children}
    </div>
  );
};

export default ModalLeftView;
