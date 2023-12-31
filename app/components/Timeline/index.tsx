import Modal from '@/app/components/Modal';
import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useMediaQuery} from 'react-responsive';
import {timelineData} from './data';
import TimelineInner from './TimelineInner';

const Timeline = () => {
  const {timeline} = useAppSelector(getModalSelector);
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModalPayload('timeline', false));
  };

  if (lessLG)
    return (
      <Modal
        open={timeline.open}
        view="swipeable"
        name="timeline"
        className="z-50">
        <TimelineInner items={timelineData} onClose={onClose} />
      </Modal>
    );

  return (
    <Modal open={timeline.open} view="center" name="timeline">
      <TimelineInner items={timelineData} onClose={onClose} />
    </Modal>
  );
};

export default Timeline;
