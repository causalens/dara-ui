import styled from '@darajs/styled-components';
import { ComboBox } from '@darajs/ui-components';

export const ColumnWrapper = styled.div<{ $fillHeight?: boolean; $gap?: number; $scrollable?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$gap ?? 0.75}rem;

    width: 100%;
    height: ${(props) => (props.$fillHeight ? '100%' : 'auto')};

    ${(props) =>
        props.$scrollable &&
        `
        overflow-y: auto;
        flex-grow: 1;
    `}
`;

export const SectionTitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
`;

export const PanelSelect = styled(ComboBox)`
    & > div {
        background-color: ${(props) => props.theme.colors.blue1};
    }
`;
