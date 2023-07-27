/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import * as React from 'react';

import styled from '@darajs/styled-components';

const ErrorBox = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1rem;

    color: ${(props) => props.theme.colors.error};

    background-color: ${(props) => props.theme.colors.background};
`;

const ErrorInfo = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 125px;
    margin: 2rem 0rem;
    padding: 0.5rem;

    color: ${(props) => props.theme.colors.background};

    background-color: ${(props) => props.theme.colors.errorHover};
`;

const ErrorParagraph = styled.p`
    color: ${(props) => props.theme.colors.error};
`;

interface Props {
    children: React.ReactNode;
}

interface State {
    error: string;
    hasError: boolean;
    stackTrace: string;
}

class ErrorBoundary extends React.Component<Props, State> {
    // eslint-disable-next-line react/state-in-constructor
    state: State = {
        error: undefined,
        hasError: false,
        stackTrace: undefined,
    };

    static getDerivedStateFromError(error: Error): State {
        return { error: error.message, hasError: true, stackTrace: undefined };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ stackTrace: errorInfo.componentStack.slice(5) });
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <ErrorBox>
                    <h1>Failed to compile</h1>
                    <ErrorInfo>
                        <h2>Error:</h2>
                        <span style={{ padding: '0rem 0rem 1rem 1rem' }}>{this.state.error}</span>
                        <h3 style={{ paddingLeft: '1rem' }}>Stack trace:</h3>
                        <div style={{ paddingLeft: '3rem' }}>
                            <span style={{ whiteSpace: 'pre-line' }}>{this.state.stackTrace}</span>
                        </div>
                    </ErrorInfo>
                    <ErrorParagraph>This error occurred during the build time and cannot be dismissed</ErrorParagraph>
                </ErrorBox>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
