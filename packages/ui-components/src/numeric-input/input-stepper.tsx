/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { FunctionComponent } from 'react';

import styled from '@darajs/styled-components';
import { ChevronDown, ChevronUp } from '@darajs/ui-icons';

import Button from '../button/button';

interface StepperWrapperProps {
    disabled: boolean;
}

const StepperWrapper = styled.div<StepperWrapperProps>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    box-sizing: border-box;
    padding: 0.25rem 0rem;

    border-radius: 0rem 0.25rem 0.25rem 0rem;
`;

const StepperButton = styled(Button)`
    min-width: 0.75rem;
    height: max-content;
    padding: 0;
    background-color: transparent !important;

    svg {
        cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
        width: 0.75rem;
        height: 0.75rem;
        color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.grey4)};
    }

    :hover:not(:disabled) {
        svg {
            color: ${(props) => props.theme.colors.grey5};
        }
    }

    :active:not(:disabled) {
        svg {
            transform: scale(0.75);
        }
    }
`;

interface InputStepperProps {
    /** property that disables the stepper */
    disabled: boolean;
    /** callback that determines the logic for increasing or decreasing input value */
    step: (value: number) => void;
    /** Optional property to set how many steps the stepper should take */
    stepSkip?: number;
}

/**
 * A simple stepper component that can be added to an input component to increase or decrease its value
 *
 * @param props the component props
 */

const InputStepper: FunctionComponent<InputStepperProps> = ({ disabled, step, stepSkip }) => {
    const amountToStep: number = Math.abs(stepSkip ?? 1);
    const stepUp = (): void => step(amountToStep);
    const stepDown = (): void => step(amountToStep * -1);

    return (
        <StepperWrapper disabled={disabled}>
            <StepperButton disabled={disabled} onClick={stepUp} styling="ghost" tabIndex={-1}>
                <ChevronUp />
            </StepperButton>

            <StepperButton disabled={disabled} onClick={stepDown} styling="ghost" tabIndex={-1}>
                <ChevronDown />
            </StepperButton>
        </StepperWrapper>
    );
};

export default InputStepper;
