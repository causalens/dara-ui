/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
/* eslint-disable jest/no-disabled-tests */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, theme } from '@darajs/styled-components';

import NumericInput, { NumericInputProps } from './numeric-input';

function RenderNumericInput(props: NumericInputProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <NumericInput {...props} />
        </ThemeProvider>
    );
}

describe('Numeric Input', () => {
    it('should only accept numeric input', async () => {
        const { getByRole, rerender } = render(<RenderNumericInput />);
        const input = getByRole('textbox', { hidden: true });

        // shouldn't accept text
        await userEvent.type(input, 'abcd', { delay: 1 });
        expect(input).toHaveValue('');

        // should accept integers
        await userEvent.type(input, '1234', { delay: 1 });
        expect(input).toHaveValue('1234');

        // should accept negative numbers
        userEvent.clear(input);
        await userEvent.type(input, '-1234', { delay: 1 });
        expect(input).toHaveValue('-1234');

        // should accept decimals
        userEvent.clear(input);
        await userEvent.type(input, '12.34', { delay: 1 });
        expect(input).toHaveValue('12.34');

        // should not accept decimals if integerOnly
        rerender(<RenderNumericInput integerOnly />);
        userEvent.clear(input);
        await userEvent.type(input, '12.34', { delay: 1 });
        expect(input).toHaveValue('1234');
    });

    it('should support the disabled prop for input', async () => {
        const onChangeStub = jest.fn();
        const { getByRole, getAllByRole } = render(
            <RenderNumericInput disabled initialValue={5} onChange={onChangeStub} stepper />
        );

        const input = getByRole('textbox', { hidden: true });
        const stepperButtons = getAllByRole('button');

        const stepUpButton = stepperButtons[0];
        const stepDownButton = stepperButtons[1];

        // Check that the input is disabled
        expect(input).toHaveAttribute('disabled');
        expect(input).toHaveStyle(`background-color: ${theme.colors.grey1}`);
        expect(input).toHaveStyle(`color: ${theme.colors.grey2}`);

        // Check that the input cannot be typed in
        await userEvent.type(input, '1234', { delay: 1 });
        expect(onChangeStub).toHaveBeenCalledTimes(0);
        expect(input).toHaveValue('5');

        // Check that stepper cannot be used
        userEvent.click(stepDownButton);
        expect(input).toHaveValue('5');

        userEvent.click(stepUpButton);
        expect(input).toHaveValue('5');
    });

    it('should listen to changes to input', async () => {
        const onChangeStub = jest.fn((value) => value);

        const { getByRole } = render(<RenderNumericInput onChange={onChangeStub} value={2} />);
        const input = getByRole('textbox', { hidden: true });

        await userEvent.type(input, '1', { delay: 1 });
        expect(onChangeStub).toHaveBeenCalledTimes(1);
        expect(onChangeStub.mock.results[0].value).toEqual(21);
    });

    it('should implement the stepper correctly', async () => {
        const { getByRole, getAllByRole } = render(<RenderNumericInput stepper />);
        const input = getByRole('textbox', { hidden: true });

        const stepperButtons = getAllByRole('button');
        expect(stepperButtons.length).toBe(2);

        const stepUpButton = stepperButtons[0];
        const stepDownButton = stepperButtons[1];

        await userEvent.type(input, '0', { delay: 1 });
        userEvent.click(stepDownButton);
        expect(input).toHaveValue('-1');

        userEvent.dblClick(stepUpButton);
        expect(input).toHaveValue('1');

        // should step up and step down via the appropriate keyboard events too
        userEvent.clear(input);
        await userEvent.type(input, '-0.1', { delay: 1 });

        await userEvent.type(input, '{arrowup}', { delay: 1 });
        expect(input).toHaveValue('0.0');

        await userEvent.type(input, '{arrowup}', { delay: 1 });
        expect(input).toHaveValue('0.1');

        await userEvent.type(input, '{arrowdown}', { delay: 1 });
        expect(input).toHaveValue('0.0');

        await userEvent.type(input, '{arrowdown}', { delay: 1 });
        expect(input).toHaveValue('-0.1');
    });

    it("should not step if input doesn't contain a valid number", async () => {
        const { getByRole, getAllByRole } = render(<RenderNumericInput stepper />);
        const input = getByRole('textbox', { hidden: true });

        const stepperButtons = getAllByRole('button');
        expect(stepperButtons.length).toBe(2);

        const stepDownButton = stepperButtons[1];

        // Nothing should happen if the input is empty
        userEvent.click(stepDownButton);
        expect(input).toHaveValue('');

        // Nothing should happen if the input is invalid
        await userEvent.type(input, '-', { delay: 1 });
        userEvent.click(stepDownButton);
        expect(input).toHaveValue('-');
    });
});
