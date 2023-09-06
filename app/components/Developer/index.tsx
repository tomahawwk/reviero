import {FC} from 'react';

const Developer: FC = () => {
  return (
    <div className="flex gap-sm">
      <img
        src="/images/developer.png"
        alt="ARC Homes"
        width={84}
        height={84}
      />
      <div className="flex flex-col gap-[5px]">
        <span className="text-p">Developer</span>
        <div className="font-medium text-xl">ARC Homes</div>
        <a href="#" className="font-medium text-primary-dark underline">
          More info
        </a>
      </div>
    </div>
  );
};

export default Developer;
