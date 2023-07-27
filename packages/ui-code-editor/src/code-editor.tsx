/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { closeBrackets } from '@codemirror/closebrackets';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { lineNumbers } from '@codemirror/gutter';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyKeymap } from '@codemirror/history';
import { json } from '@codemirror/lang-json';
import { python } from '@codemirror/lang-python';
import { bracketMatching } from '@codemirror/matchbrackets';
import { searchKeymap } from '@codemirror/search';
import { EditorState, StateField } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { useEffect, useRef } from 'react';

import styled from '@darajs/styled-components';

const EditorRoot = styled.div`
    overflow-y: scroll;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;

    border: 1px solid ${(props) => props.theme.colors.grey3};
    .cm-wrap {
        flex: 1 1 auto;
        color: ${(props) => props.theme.colors.text};
    }
    .cm-gutters {
        color: ${(props) => props.theme.colors.grey4};
        background-color: ${(props) => props.theme.colors.grey2};
        border-right-color: ${(props) => props.theme.colors.grey3};
    }
`;

interface CodeEditorProps {
    /**
     * Standard classname prop
     */
    className?: string;
    /**
     * Whether the code editor should be disabled
     */
    disabled?: boolean;
    /**
     * The initial script
     */
    initialScript?: string;
    /**
     * An optional onChange handler for listening to updates
     */
    onChange?: (e: string) => void | Promise<void>;
    /**
     * Standard style prop
     */
    style?: React.CSSProperties;
}

/**
 * The CodeEditor component.
 * Currently has JSON and Python langauge support.
 */
function CodeEditor({ initialScript, disabled, onChange, style, className }: CodeEditorProps): JSX.Element {
    const editorRef = useRef();

    useEffect(() => {
        if (editorRef.current) {
            // Simple codemirror extension that sends updates up
            const dispatchChanges = StateField.define({
                create() {
                    return true;
                },
                update(value, tr) {
                    if (onChange) {
                        // this works, but toString() is not documented in the type
                        // eslint-disable-next-line @typescript-eslint/no-base-to-string
                        onChange(tr.state.doc.toString());
                    }

                    return true;
                },
            });

            // Configure extensions; for now these match the CLDS configuration
            const startState = EditorState.create({
                doc: initialScript ?? '',
                extensions: [
                    lineNumbers(),
                    dispatchChanges,
                    history(),
                    python(),
                    json(),
                    bracketMatching(),
                    closeBrackets(),
                    defaultHighlightStyle,
                    EditorState.tabSize.of(4),
                    EditorView.editable.of(!disabled),
                    keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap, indentWithTab]),
                ],
            });

            const view = new EditorView({
                parent: editorRef.current,
                state: startState,
            });

            return () => view.destroy();
        }
    }, []);

    return <EditorRoot className={className} ref={editorRef} style={style} />;
}

export default CodeEditor;
