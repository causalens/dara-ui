import styled from '@darajs/styled-components';

export const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;

    width: 100%;
`;

export const Center = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Graph = styled.div`
    cursor: grab;

    /* This is a CSS trick for the graph to fill the available space of the flex container */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
    flex: 1 1 auto;

    width: 100%;
    height: 100%;

    border: 1px solid ${(props) => props.theme.colors.grey2};
    border-radius: 4px;
`;
