/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { forwardRef, useEffect, useMemo, useState } from 'react';

import styled from '@darajs/styled-components';
import { Moon } from '@darajs/ui-icons';

import { InteractiveComponentProps } from '../types';
import Sun from './sun-icon';

interface EnabledProp {
    enabled: boolean;
}

const SwitchWrapper = styled.div<EnabledProp>`
    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.enabled ? 'flex-start' : 'flex-end')};

    width: max-content;
    height: 24px;
    padding: 0;
    padding-right: ${(props) => (props.enabled ? '1.75rem' : '0.5rem')};
    padding-left: ${(props) => (props.enabled ? '0.5rem' : '1.75rem')};

    font-size: ${(props) => props.theme.font.size};
    color: ${(props) => props.theme.colors.blue1};

    background-color: ${(props) => (props.enabled ? props.theme.colors.primary : props.theme.colors.secondary)};
    border-radius: 12px;

    svg {
        color: ${(props) => props.theme.colors.blue1};
    }
`;

const SwitchHandle = styled.span<EnabledProp>`
    position: absolute;
    top: 2px;
    left: ${(props) => (props.enabled ? 'calc(100% - 1.375rem)' : '0.125rem')};

    display: inline-block;

    width: 1.25rem;
    height: 1.25rem;

    background-color: ${(props) => props.theme.colors.blue1};
    border-radius: 0.625rem;

    transition: left 100ms linear;
`;

interface SwitchLabel {
    off: React.ReactNode;
    on: React.ReactNode;
}

export interface SwitchProps extends InteractiveComponentProps<boolean> {
    /** An optional prop object with on and off properties that map to alternate labels for those states */
    labels?: SwitchLabel;
    /** A boolean defining whether to show lightdark switch */
    lightDark?: boolean;
    /** An optional onChange handler that will be called when the switch it toggled */
    onChange?: (enabled: boolean) => void | Promise<void>;
}

/**
 * A simple switch component that can be on or off. Accepts an onChange handler to listen for changes to the state.
 *
 * @param {SwitchProps} props - the component props
 */
function Switch(
    {
        className,
        initialValue = false,
        labels = {
            off: 'OFF',
            on: 'ON',
        },
        lightDark = false,
        onChange,
        style,
        value,
    }: SwitchProps,
    ref: React.Ref<HTMLDivElement>
): JSX.Element {
    const [enabled, setEnabled] = useState(value || initialValue);

    const labelIconToShow = useMemo(() => {
        if (lightDark) {
            return enabled ? <Sun /> : <Moon />;
        }
        return enabled ? labels.on : labels.off;
    }, [labels, lightDark, enabled]);

    useEffect(() => {
        if (value !== undefined) {
            setEnabled(value);
        }
    }, [value]);

    const onClick = (): void => {
        if (value === undefined) {
            setEnabled(!enabled);
        }
        onChange?.(!enabled);
    };

    return (
        <SwitchWrapper
            className={className}
            data-testid="wrapper"
            enabled={enabled}
            onClick={onClick}
            ref={ref}
            style={style}
        >
            <SwitchHandle data-testid="handle" enabled={enabled} />
            <div style={{ userSelect: 'none' }}>{labelIconToShow}</div>
        </SwitchWrapper>
    );
}

export default forwardRef(Switch);
