import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as MDIcon from '@mdi/react';
import * as React from 'react';
import type { StyledComponent } from 'styled-components';

import styled, { DefaultTheme } from '@darajs/styled-components';

type IconProps = AsButtonProp & Omit<FontAwesomeIconProps, 'icon'>;

interface AsButtonProp {
    asButton?: boolean;
}

const shouldForwardProp = (prop: any): boolean => !['asButton'].includes(prop);

/**
 * A thin style wrapper around the base FontAwesome icon component that adds button styling and colors it using the
 * cl icon color
 */
const StyledFAIcon: StyledComponent<
    (props: FontAwesomeIconProps) => JSX.Element,
    DefaultTheme,
    AsButtonProp,
    never
> = styled(FontAwesomeIcon).withConfig({ shouldForwardProp })<AsButtonProp>`
    cursor: ${(props) => (props.asButton ? 'pointer' : 'inherit')};
    color: inherit;
    ${(props) => (props.asButton ? `:hover { color: ${props.theme.colors.grey6}; }` : '')}
`;

const mapFASizeToMD: { [k: string]: string } = {
    '10x': '120px',
    '1x': '12px',
    '2x': '24px',
    '3x': '36px',
    '4x': '48px',
    '5x': '60px',
    '6x': '72px',
    '7x': '84px',
    '8x': '96px',
    '9x': '108px',
    lg: '24px',
    sm: '12px',
    xs: '6px',
};

/**
 * Component that passes through all props and remaps the FA size prop to work with MD icons
 *
 * @param props the props for the MDIcon component
 */
const SizeMappedMDIcon = (props: any): JSX.Element => {
    // Using MDIcon.Icon here to make MDIIcon work with Vite
    if (props.size) {
        return <MDIcon.Icon {...{ ...props, size: mapFASizeToMD[props.size as string] }} />;
    }

    return <MDIcon.Icon {...props} />;
};

/**
 * A thin style wrapper around the base MD icon component that adds button styling and colors it using the
 * cl icon color
 */
const StyledMDIcon: StyledComponent<(props: any) => JSX.Element, DefaultTheme, AsButtonProp, never> = styled(
    SizeMappedMDIcon
).withConfig({ shouldForwardProp })<AsButtonProp>`
    cursor: ${(props) => (props.asButton ? 'pointer' : 'default')};
    color: inherit;
    ${(props) => (props.asButton ? `:hover { color: ${props.theme.colors.grey6 as string}; }` : '')}
`;

export { IconProps, StyledFAIcon, StyledMDIcon };
