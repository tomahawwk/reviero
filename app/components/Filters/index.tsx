import {setModalPayload} from '@/app/store/actions/modal';
import {getModalSelector} from '@/app/store/reducers/modal/modal';
import breakpoints from '@/breakpoints';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useMediaQuery} from 'react-responsive';
import Modal from '../Modal';
import FiltersInner from './FiltersInner';

const Filters = () => {
  const lessLG = useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`});
  const {filters} = useAppSelector(getModalSelector);
  const dispatch = useAppDispatch();

  const onCloseDesktop = () => {
    dispatch(setModalPayload('filters', false));
  };

  if (lessLG)
    return (
      <Modal
        open={filters.open}
        view="swipeable"
        name="filters"
        className="z-50">
        <FiltersInner onClose={onCloseDesktop} />
      </Modal>
    );

  return (
    <Modal open={filters.open} view="center" name="filters">
      <FiltersInner onClose={onCloseDesktop} />
    </Modal>
  );
};

export default Filters;
