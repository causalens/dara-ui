
import styled from '@darajs/styled-components';

import Button from '../button/button';
import { Chevron } from '../utils';
import React from 'react';

const StyledChevronButton = styled(Button).attrs((attrs) => ({ ...attrs, styling: 'ghost' }))`
    min-width: 0;
    height: auto;
    margin: 0;
    padding: 0 0.25rem;

    background-color: transparent !important;
`;

type Props = {
    getToggleButtonProps: () => Record<string, unknown>;
    disabled: boolean;
    isOpen: boolean;
}

const ChevronButton = ({getToggleButtonProps, disabled, isOpen, ...props}: Props): JSX.Element => {
    const toggleButtonProps =  {...getToggleButtonProps()}
    return (

        <StyledChevronButton {...toggleButtonProps} {...props} >
            <Chevron disabled={disabled} isOpen={isOpen} />
        </StyledChevronButton>
    );
};

export default React.memo(ChevronButton);
