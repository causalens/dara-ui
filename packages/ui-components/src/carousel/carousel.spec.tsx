/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
/* eslint-disable jest/no-disabled-tests */
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider, theme } from '@darajs/styled-components';

import Carousel, { CarouselProps } from './carousel';

function RenderCarousel(props: CarouselProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Carousel {...props} />
        </ThemeProvider>
    );
}

const mockPanels = [{ title: 'value0' }, { title: 'value1' }, { title: 'value2' }];

describe('Carousel', () => {
    it('should display correctly when loaded', () => {
        const { getByText } = render(<RenderCarousel items={mockPanels} />);

        for (let i = 0; i < 3; i++) {
            const valueName = `value${i}`;

            // The element is always in the DOM
            const valueElement = getByText(valueName);
            expect(valueElement).toBeInTheDocument();
        }
    });

    it('onChange should be called when clicking buttons in controlled mode', () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<RenderCarousel items={mockPanels} onChange={onChange} value={1} />);

        const leftArrow = getByTestId('carousel-left-button');
        const rightArrow = getByTestId('carousel-right-button');

        fireEvent.click(leftArrow);
        expect(onChange).toHaveBeenCalledWith(0);

        fireEvent.click(rightArrow);
        expect(onChange).toHaveBeenCalledWith(2);
    });

    it('Check that carousel loops at both ends', () => {
        const onChange = jest.fn();
        const { getByTestId, rerender } = render(<RenderCarousel items={mockPanels} onChange={onChange} value={2} />);

        expect(onChange).toHaveBeenCalledTimes(0);

        const leftArrow = getByTestId('carousel-left-button');
        const rightArrow = getByTestId('carousel-right-button');

        fireEvent.click(rightArrow);
        expect(onChange).toHaveBeenCalledWith(0);

        // set component value to 0
        rerender(<RenderCarousel items={mockPanels} onChange={onChange} value={0} />);

        fireEvent.click(leftArrow);
        expect(onChange).toHaveBeenCalledWith(2);
    });
});
