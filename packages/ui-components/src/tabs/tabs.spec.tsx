/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, theme } from '@darajs/styled-components';

import Tabs, { TabsProps } from './tabs';

function RenderTabs(props: TabsProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Tabs {...props} />
        </ThemeProvider>
    );
}

const sampleTabs = ['Tab 1', 'Tab 2', 'Tab 3'];

describe('Tabs', () => {
    it('should display correctly', () => {
        render(<RenderTabs selectedTab={sampleTabs[0]} tabs={sampleTabs} />);
        sampleTabs.forEach((tab) => expect(screen.getByText(tab)).toBeInTheDocument());
    });

    it('should listen to changes to selectedTab', () => {
        const onSelectTabStub = jest.fn((value) => value);
        render(<RenderTabs onSelectTab={onSelectTabStub} selectedTab={sampleTabs[0]} tabs={sampleTabs} />);

        const Tab2 = screen.getByText(sampleTabs[1]);
        userEvent.click(Tab2);
        expect(onSelectTabStub).toHaveBeenCalledTimes(1);
        expect(onSelectTabStub.mock.results[0].value).toEqual(sampleTabs[1]);
    });
});
