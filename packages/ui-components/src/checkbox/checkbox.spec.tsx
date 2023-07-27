/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { RenderResult, fireEvent, render, waitFor } from '@testing-library/react';

import { ThemeProvider, theme } from '@darajs/styled-components';

import Checkbox, { CheckboxProps } from './checkbox';

function renderCheckbox(props: CheckboxProps = {}): RenderResult {
    return render(
        <ThemeProvider theme={theme}>
            <Checkbox {...props} />
        </ThemeProvider>
    );
}

describe('Checkbox', () => {
    it('component should render', () => {
        const { getByRole } = renderCheckbox();

        const checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox).not.toHaveAttribute('checked');
    });

    it('should enter controlled mode when selected prop is passed', async () => {
        const onClickStub = jest.fn();
        const { getByRole } = renderCheckbox({ onChange: onClickStub, selected: true });

        // Should be checked initially
        let checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox).toHaveAttribute('checked', '');

        // Click - check onClick is called
        fireEvent.click(checkbox);
        await waitFor(() => getByRole('checkbox', { hidden: true }));
        expect(onClickStub).toHaveBeenCalledTimes(1);

        // After clicking - should be STILL checked because it's controlled by prop
        checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox).toHaveAttribute('checked', '');
    });

    it('should support the disabled prop', async () => {
        const onClickStub = jest.fn();
        const { container, getByRole, rerender } = renderCheckbox({
            disabled: true,
            onChange: onClickStub,
            selected: true,
        });

        // Should be checked initially and greyed out
        let checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox).toHaveAttribute('aria-disabled', 'true');

        expect(container.querySelector('span')).toHaveStyle(`background-color: ${theme.colors.grey3}`);

        // Click, onClick should not be called
        fireEvent.click(getByRole('checkbox', { hidden: true }));
        await waitFor(() => getByRole('checkbox', { hidden: true }));
        expect(onClickStub).toHaveBeenCalledTimes(0);

        // Re-render a disabled one to check color again
        rerender(
            <ThemeProvider theme={theme}>
                <Checkbox disabled onChange={onClickStub} selected={false} />
            </ThemeProvider>
        );

        checkbox = getByRole('checkbox', { hidden: true });
        expect(checkbox).toHaveAttribute('aria-disabled', 'true');
        expect(container.querySelector('span')).toHaveStyle(`background-color: ${theme.colors.grey3}`);
    });
});
