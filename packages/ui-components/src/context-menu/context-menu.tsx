/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import styled from '@darajs/styled-components';

import { Key } from '../constants';
import { List, ListItem, matchWidthToReference } from '../utils';
import {
    flip,
    offset,
    shift,
    size,
    useFloating,
    useInteractions,
    useRole,
} from '@floating-ui/react';



export interface MenuAction {
    action: () => void;
    label: string;
}

const DropdownList = styled(List)`
    overflow-y: auto;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

export interface ContextMenuProps<T> {
    /** An array of actions to show in the context menu */
    actions: Array<MenuAction>;
    /** Pass through children onto the root element */
    children?: React.ReactNode;
    /** Pass through className onto the root element */
    className?: string;
    /** Any element props for the root element */
    elementProps?: T;
}

/**
 * The ContextMenu is a higher order component that wraps another react component and overrides its context menu to be a
 * custom list of actions, defined by the actions prop.
 *
 * @param Component the component to wrap and draw as the root
 */
function ContextMenu<T>(Component: React.ComponentType<T> | string): (props: ContextMenuProps<T>) => JSX.Element {
    function WrappedContextMenu(props: ContextMenuProps<T>): JSX.Element {
        const [showMenu, setShowMenu] = useState(false);
        const [hoveredItem, setHoveredItem] = useState(-1);
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        // Handle clicking outside the menu or hitting escape and make sure the menu closes.
        useEffect(() => {
            const keyHandler = (e: KeyboardEvent): void => {
                if (e.key === Key.ESCAPE) {
                    setShowMenu(false);
                }
            };
            const mouseHandler = (): void => {
                setShowMenu(false);
            };
            if (showMenu) {
                document.addEventListener('keydown', keyHandler);
                document.addEventListener('click', mouseHandler);
                document.addEventListener('contextmenu', mouseHandler);
            }
            return () => {
                document.removeEventListener('keydown', keyHandler);
                document.removeEventListener('click', mouseHandler);
                document.removeEventListener('contextmenu', mouseHandler);
            };
        }, [showMenu]);

        // Set a timer on opening the dropdown before it can be closed, prevents first menu item being selected
        // immediately, but lets user select action with the mouse up if they want to.
        const [canClose, setCanClose] = useState(true);
        useEffect(() => {
            if (showMenu) {
                setCanClose(false);
                const timeout = setTimeout(() => {
                    setCanClose(true);
                }, 300);
                return () => {
                    setCanClose(true);
                    clearTimeout(timeout);
                };
            }
        }, [showMenu]);

        const { refs, floatingStyles, context } = useFloating<HTMLElement>({
            open: showMenu,
            placement: 'bottom-start',
            middleware: [
                offset({
                    mainAxis: 4,
                    alignmentAxis: -2,
                }),
                shift(),
                flip(),
                matchWidthToReference(),
            ],
        });

        const onContextMenu = (e: React.MouseEvent): void => {
            // dispatch event of a right click to close other context menu in the page
            document.dispatchEvent(new Event('contextmenu'));
            e.preventDefault();
            e.stopPropagation();

            setMousePosition({ x: e.clientX, y: e.clientY });
            setShowMenu(true);
        };

        const onAction = (action: MenuAction): void => {
            if (canClose) {
                setShowMenu(false);
                action.action();
            }
        };

        const role = useRole(context);
        const { getFloatingProps } = useInteractions([role]);

        const virtualElement = useMemo(
            () => ({
                getBoundingClientRect: () => ({
                    x: mousePosition.x,
                    y: mousePosition.y,
                    width: 0,
                    height: 0,
                    top: mousePosition.y,
                    right: mousePosition.x,
                    bottom: mousePosition.y,
                    left: mousePosition.x,
                }),
            }),
            [mousePosition.x, mousePosition.y]
        );

        useEffect(() => {
            if (showMenu) {
                refs.setReference(virtualElement);
            }
        }, [showMenu, virtualElement, refs]);

        return (
            <>
                <Component {...props.elementProps} className={props.className} onContextMenu={onContextMenu}>
                    {props.children}
                </Component>
                {ReactDOM.createPortal(
                    <DropdownList
                        {...getFloatingProps()}
                        ref={refs.setFloating}
                        isOpen={showMenu}
                        style={{ ...floatingStyles, zIndex: 9999 }}
                    >
                        {props.actions.map((action, index) => (
                            <ListItem
                                hovered={hoveredItem === index}
                                key={`item-${index}`}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(-1)}
                                onMouseUp={() => onAction(action)}
                                title={action.label}
                            >
                                {action.label}
                            </ListItem>
                        ))}
                    </DropdownList>,
                    document.body
                )}
            </>
        );
    }

    return WrappedContextMenu;
}

export default ContextMenu;
