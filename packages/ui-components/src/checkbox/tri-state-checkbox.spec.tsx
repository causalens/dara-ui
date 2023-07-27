/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { fireEvent, render, waitFor } from '@testing-library/react';

import { ThemeProvider, theme } from '@darajs/styled-components';

import TriStateCheckbox, { CheckboxProps, CheckboxState } from './tri-state-checkbox';

function RenderTriStateCheckbox(props: CheckboxProps = {}): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <TriStateCheckbox {...props} />
        </ThemeProvider>
    );
}

describe('TriStateCheckbox', () => {
    it('should display correctly', () => {
        const { getByRole } = render(<RenderTriStateCheckbox />);

        const checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox.tagName).toEqual('INPUT');
    });

    it('should call the onChange stub correctly when clicked and should only update when new props are passed', async () => {
        const onClickStub = jest.fn();
        const { getByRole, rerender } = render(<RenderTriStateCheckbox onChange={onClickStub} />);

        // Click - check onClick is called with UNCHECKED
        fireEvent.click(getByRole('checkbox', { hidden: true }));
        await waitFor(() => getByRole('checkbox', { hidden: true }));
        expect(onClickStub).toHaveBeenCalledTimes(1);
        expect(onClickStub).toHaveBeenCalledWith(CheckboxState.UNCHECKED, expect.any(Object));

        // Set the checkbox to be unchecked
        rerender(<RenderTriStateCheckbox noneSelected onChange={onClickStub} />);

        // Click again and check that the new state is CHECKED
        onClickStub.mockClear();
        fireEvent.click(getByRole('checkbox', { hidden: true }));
        await waitFor(() => getByRole('checkbox', { hidden: true }));
        expect(onClickStub).toHaveBeenCalledTimes(1);
        expect(onClickStub).toHaveBeenCalledWith(CheckboxState.CHECKED, expect.any(Object));

        // Set the checkbox to be checked
        rerender(<RenderTriStateCheckbox allSelected onChange={onClickStub} />);

        // Click again and check that the new state is UNCHECKED
        onClickStub.mockClear();
        fireEvent.click(getByRole('checkbox', { hidden: true }));
        await waitFor(() => getByRole('checkbox', { hidden: true }));
        expect(onClickStub).toHaveBeenCalledTimes(1);
        expect(onClickStub).toHaveBeenCalledWith(CheckboxState.UNCHECKED, expect.any(Object));
    });
});
