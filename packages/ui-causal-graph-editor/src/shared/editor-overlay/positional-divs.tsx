/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import styled from '@darajs/styled-components';

interface PositionDivProps {
    padding: string;
}

const applyPadding = (props: PositionDivProps): string => props.padding;

const OverlayDiv = styled.div`
    position: absolute;
    z-index: 1;

    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    justify-content: space-between;

    opacity: 0;

    transition: opacity 0.2s ease-in-out;

    :focus-within,
    &.show {
        opacity: 1;
    }
`;

export const BottomDiv = styled(OverlayDiv)<{ padding: string }>`
    pointer-events: none;
    right: ${applyPadding};
    bottom: ${applyPadding};
    left: ${applyPadding};
`;

export const TopDiv = styled(OverlayDiv)<{ padding: string }>`
    pointer-events: none;
    top: ${applyPadding};
    right: ${applyPadding};
    left: ${applyPadding};
`;

const CornerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;
`;

export const TopRightDiv = styled(CornerDiv)`
    z-index: 5;

    overflow-x: hidden;
    align-items: flex-start;
    justify-content: start;

    padding-bottom: 0.5rem;
`;
export const TopLeftDiv = styled(CornerDiv)`
    z-index: 5;
    align-items: flex-start;
    justify-content: end;
`;
export const BottomRightDiv = styled(CornerDiv)`
    z-index: 5;
    align-items: flex-end;
    justify-content: start;
`;
export const BottomLeftDiv = styled(CornerDiv)`
    z-index: 5;
    align-items: flex-end;
    justify-content: end;
`;

export const PanelDiv = styled.div<{ $hide?: boolean }>`
    pointer-events: ${(props) => (props.$hide ? 'none' : 'auto')};
    cursor: default;

    position: absolute;
    z-index: 5;
    top: 70px;
    right: 10px;

    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;

    width: 23rem;
    max-width: calc(100% - 20px);
    max-height: calc(100% * 0.85);
    padding: 1.5rem;

    opacity: ${(props) => (props.$hide ? 0 : 1)};
    background-color: ${(props) => props.theme.colors.grey1};
    border-radius: 4px;
    box-shadow: ${(props) => props.theme.shadow.light};

    transition: opacity 0.2s ease-in-out;

    @media (max-width: 576px) {
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;

        width: 100%;
        max-height: calc(100% - 20px);
    }
`;
