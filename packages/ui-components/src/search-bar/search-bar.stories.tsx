import { Meta } from '@storybook/react';

import { default as SearchBarComponent, SearchBarProps } from './search-bar';

export default {
    component: SearchBarComponent,
    title: 'UI Components/Search Bar',
} as Meta;

export const SearchBar = (props: SearchBarProps): JSX.Element => <SearchBarComponent {...props} />;
