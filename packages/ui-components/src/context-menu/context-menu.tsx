import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled from '@darajs/styled-components';

import { Key } from '../constants';
import { List, ListItem } from '../utils';

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
        const [popperElement, setPopperElement] = useState(null);
        const [showMenu, setShowMenu] = useState(false);
        const [hoveredItem, setHoveredItem] = useState(-1);

        // This ref is updated with the current mouse position each time the context menu is open, but as it's the same
        // element, popper doesn't need to recreate everything.
        const boundingRectRef = useRef({
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
        } as DOMRect);
        const fakeElement = useMemo(
            () => ({
                contextElement: document.body,
                getBoundingClientRect: () => boundingRectRef.current,
            }),
            []
        );

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

        const { styles, attributes, update } = usePopper(fakeElement, popperElement, {
            placement: 'bottom-start',
        });

        const onContextMenu = (e: React.MouseEvent): void => {
            // dispatch event of a right click to close other context menu in the page
            document.dispatchEvent(new Event('contextmenu'));
            e.preventDefault();
            e.stopPropagation();
            boundingRectRef.current = {
                ...boundingRectRef.current,
                left: e.clientX,
                top: e.clientY,
            };
            update();
            setShowMenu(true);
        };

        const onAction = (action: MenuAction): void => {
            if (canClose) {
                setShowMenu(false);
                action.action();
            }
        };

        return (
            <>
                <Component {...props.elementProps} className={props.className} onContextMenu={onContextMenu}>
                    {props.children}
                </Component>
                {ReactDOM.createPortal(
                    <DropdownList
                        {...attributes.popper}
                        isOpen={showMenu}
                        ref={setPopperElement}
                        style={{ ...styles.popper, minWidth: 150, zIndex: 9999 }}
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
