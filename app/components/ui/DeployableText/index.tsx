import {FC, useState} from 'react';
import {IDeployableText} from './types';

const DeployableText: FC<IDeployableText> = ({
  text,
  classes,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const cutLength = 600;
  return (
    <div className={classes}>
      {text?.slice(0, showMore ? text.length : cutLength)}
      {!showMore && text?.length > cutLength && '...'}
      &nbsp;
      {text?.length > cutLength && (
      <button onClick={() => setShowMore(!showMore)} className="font-medium underline text-primary-main md:text-black">
        {showMore ? 'Show less' : 'Read more'}
      </button>
      )}
    </div>
  );
};

export default DeployableText;
