const ModalCenterView = (props: any) => {
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 m-auto ease-cubic duration-[600ms]
      transition overflow-y-auto w-fit h-fit${!props.showModal ? ' translate-y-[30px] opacity-0' : ''
      }`}>
      {props.children}
    </div>
  );
};

export default ModalCenterView;
