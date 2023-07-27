/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, theme } from '@darajs/styled-components';

import { Item } from '../types';
import RadioGroup, { RadioGroupProps } from './radio-group';

function RenderRadioGroup(props: RadioGroupProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <RadioGroup {...props} />
        </ThemeProvider>
    );
}

const mockItems: Item[] = [
    {
        label: 'One',
        value: 1,
    },
    {
        label: 'Two',
        value: 2,
    },
    {
        label: 'Three',
        value: 3,
    },
];

describe('RadioGroup', () => {
    it('should render correctly', () => {
        const { getAllByRole } = render(<RenderRadioGroup items={mockItems} />);

        // expect to see 3 radio buttons with the correct labels
        const radioButtons = getAllByRole('radio');
        expect(radioButtons.length).toEqual(3);
        // radio button has a span helping display it followed by the label value, so we target the second sibling
        expect(radioButtons[0].nextSibling?.nextSibling?.textContent).toEqual('One');
        expect(radioButtons[1].nextSibling?.nextSibling?.textContent).toEqual('Two');
        expect(radioButtons[2].nextSibling?.nextSibling?.textContent).toEqual('Three');
    });

    it('should render correctly with initial value', () => {
        const { container } = render(<RenderRadioGroup initialValue={2} items={mockItems} />);

        // expect to see 3 radio buttons with the correct labels
        const radioButtons = container.querySelectorAll('input[type="radio"]');
        // expect the second radio button to be checked
        expect(radioButtons[0]).not.toBeChecked();
        expect(radioButtons[1]).toBeChecked();
        expect(radioButtons[2]).not.toBeChecked();
    });

    it('should call onChange in controlled mode', () => {
        const onChangeStub = jest.fn();
        const { container } = render(
            <RenderRadioGroup
                items={mockItems}
                onChange={onChangeStub}
                value={{
                    label: 'Two',
                    value: 2,
                }}
            />
        );

        // expect to see 3 radio buttons with the correct labels
        const radioButtons = container.querySelectorAll('input[type="radio"]');

        // expect the second radio button to be checked
        expect(radioButtons[0]).not.toBeChecked();
        expect(radioButtons[1]).toBeChecked();
        expect(radioButtons[2]).not.toBeChecked();

        // click on the first radio button
        userEvent.click(radioButtons[0]);

        // expect onChange to have been called with the correct value
        expect(onChangeStub).toHaveBeenCalledWith({ label: 'One', value: 1 }, expect.anything());
    });

    it('check only one value can be selected at a time', () => {
        const { container } = render(<RenderRadioGroup items={mockItems} />);

        // expect to see 3 radio buttons with the correct labels
        const radioButtons = container.querySelectorAll('input[type="radio"]');

        // click on the first radio button
        userEvent.click(radioButtons[0]);

        // expect the first radio button to be checked
        expect(radioButtons[0]).toBeChecked();
        expect(radioButtons[1]).not.toBeChecked();
        expect(radioButtons[2]).not.toBeChecked();

        // click on the second radio button
        userEvent.click(radioButtons[1]);
        // expect the second radio button to be checked
        expect(radioButtons[0]).not.toBeChecked();
        expect(radioButtons[1]).toBeChecked();
        expect(radioButtons[2]).not.toBeChecked();
    });
});
