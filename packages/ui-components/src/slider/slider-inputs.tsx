/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { FunctionComponent, useCallback, useRef } from 'react';

import styled from '@darajs/styled-components';
import { useIntersectionObserver } from '@darajs/ui-utils';

import NumericInput from '../numeric-input/numeric-input';

interface InputWrapperProps {
    firstInputVisible: boolean;
    lastInputVisible: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    display: flex;
    flex: 1 1 auto;
    height: 3rem;
    div {
        flex: 1 1 auto;
    }

    input {
        height: 100%;

        ::before {
            content: ' ';

            position: sticky;
            top: 0;
            left: 0;

            width: ${(props) => (!props.firstInputVisible ? '8px' : 0)};
            height: 2.5rem;
        }

        ::after {
            content: '';

            position: sticky;
            top: 0;
            right: 0;

            width: ${(props) => (!props.lastInputVisible ? '8px' : 0)};
            height: 2.5rem;
        }
    }
`;

interface SliderInputsProps {
    /** The domain defines the range of possible values that the slider can take */
    domain: [number, number];
    /** The error message callback for inputs when value is out of domain range */
    getErrorMsg: (value: number, index: number) => string;
    /** Slider Values state setter */
    setSliderValues: React.Dispatch<React.SetStateAction<number[]>>;
    /** Slider Values */
    sliderValues: number[];
}

/**
 * The SliderInputs component displays the actual input values of the slider in a horizontal scrollable view
 * that can be edited and have the changes reflected on the slider.
 *
 * @param {SliderInputsProps} props - the props for the component
 */
const SliderInputs: FunctionComponent<SliderInputsProps> = ({
    getErrorMsg,
    sliderValues,
    setSliderValues,
    domain,
}): JSX.Element => {
    const firstInputRef = useRef();
    const lastInputRef = useRef();

    const firstInputVisible = useIntersectionObserver(firstInputRef, '0px', 0.5);
    const lastInputVisible = useIntersectionObserver(lastInputRef, '0px', 0.5);

    const onInputChange = useCallback(
        (value: number, index: number): void => {
            setSliderValues((currSliderValues) => {
                const updatedValues = [...currSliderValues];
                updatedValues[index] = Number.isNaN(value) ? domain[0] : value;
                return updatedValues;
            });
        },
        [domain, setSliderValues]
    );

    return (
        <InputWrapper firstInputVisible={firstInputVisible} lastInputVisible={lastInputVisible}>
            {sliderValues.map((value, index) => {
                let inputRef = null;
                if (index === 0) inputRef = firstInputRef;
                if (index === sliderValues.length - 1) inputRef = lastInputRef;
                return (
                    <div key={index} ref={inputRef}>
                        <NumericInput
                            errorMsg={getErrorMsg(value, index)}
                            onChange={(val) => onInputChange(val, index)}
                            style={{ height: '2rem', margin: '0.25rem 0.5rem' }}
                            value={value}
                        />
                    </div>
                );
            })}
        </InputWrapper>
    );
};

export default SliderInputs;
