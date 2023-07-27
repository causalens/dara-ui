/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import styled, { theme } from '@darajs/styled-components';
import { Button } from '@darajs/ui-components';
import { ArrowLeft, ArrowRight, TrashAlt } from '@darajs/ui-icons';

const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    width: 100%;
`;

const Title = styled.h3`
    justify-self: center;

    margin: 0;
    padding: 0;

    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
`;

const SmallButton = styled(Button)`
    width: 28px;
    min-width: 0;
    height: 28px;
    padding: 0 0.25rem;
`;

export interface PanelTitleProps {
    /** Action to perform on press of the delete button */
    onDelete?: () => void | Promise<void>;
    /** Action to perform on press of the next button */
    onNext?: () => void | Promise<void>;
    /** Action to perform on press of the previous button */
    onPrev?: () => void | Promise<void>;
    /** Title for the panel */
    title: string;
}

export function PanelTitle(props: PanelTitleProps): JSX.Element {
    return (
        <TitleWrapper>
            <div style={{ display: 'flex', justifySelf: 'left' }}>
                {props.onPrev && (
                    <SmallButton aria-label="Previous" onClick={props.onPrev} styling="ghost">
                        <ArrowLeft />
                    </SmallButton>
                )}
                {props.onNext && (
                    <SmallButton aria-label="Next" onClick={props.onNext} styling="ghost">
                        <ArrowRight />
                    </SmallButton>
                )}
            </div>
            <Title>{props.title}</Title>
            {props.onDelete && (
                <SmallButton
                    aria-label="Delete"
                    onClick={props.onDelete}
                    style={{
                        color: theme.colors.error,
                        justifySelf: 'right',
                    }}
                    styling="ghost"
                >
                    <TrashAlt />
                </SmallButton>
            )}
        </TitleWrapper>
    );
}
