import ReactSlider from 'react-slider';
import './custom-styles.css'
import { FC } from 'react';
import { ISliderRange } from './types';

const SliderRange: FC<ISliderRange> = ({min, max, step, value, setValue}) => {
    const getValue = (value: number) => {
        setValue(value)
    }

    return (
        <ReactSlider
            className="range"
            thumbClassName="range-thumb"
            trackClassName="range-track"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={getValue}
        />
    )
}

export default SliderRange;
