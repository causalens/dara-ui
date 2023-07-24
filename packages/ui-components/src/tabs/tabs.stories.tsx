import { Meta } from '@storybook/react';
import { useState } from 'react';

import { default as TabsComponent, TabsProps } from './tabs';

export default {
    component: TabsComponent,
    title: 'UI Components/Tabs',
} as Meta;

const sampleTabs = ['Tab 1', 'Tab 2', 'Tab 3'];

export const Tabs = (args: TabsProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState<string>(sampleTabs[0]);

    const onSelectTab = (tab: string): void => {
        setSelectedTab(tab);
    };

    return <TabsComponent {...args} onSelectTab={onSelectTab} selectedTab={selectedTab} />;
};

Tabs.args = {
    tabs: sampleTabs,
};
