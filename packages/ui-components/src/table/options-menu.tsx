import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import { ColumnInstance, Filters } from 'react-table';

import styled from '@darajs/styled-components';
import { useOnClickOutside } from '@darajs/ui-utils';

import SectionedList, { ListSection } from '../sectioned-list/sectioned-list';
import { Item } from '../types';
import { List } from '../utils';

const HeaderOptionsIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    align-items: center;
    color: ${(props) => props.theme.colors.grey5};
`;

const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 12px;

    background-color: ${(props) => props.theme.colors.grey3};
`;

const OptionsDropdownList = styled(List)`
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: ${(props) => props.theme.shadow.light};
`;

interface OptionsMenuProps {
    /** all columns from the table component */
    allColumns: ColumnInstance<any>[];
    /** Optional flag to enable column hiding */
    allowColumnHiding?: boolean;
    /** count of currently visible columns */
    numVisibleColumns: number;
    /** column resizing reset function callback from useTable */
    resetResizing: () => void;
    /** filter setter from useTable */
    setAllFilters: (updater: Filters<any> | ((filters: Filters<any>) => Filters<any>)) => void;
    /** Pass through of the style prop to the table options Dropdown */
    style: React.CSSProperties;
}

/**
 * The OptionsMenu component adds a sectioned list menu to the Table component.
 * It inherits the ability to reset column widths and filters from react-table's useTable hook
 *
 * @param props - the component props
 */
const OptionsMenu: FunctionComponent<OptionsMenuProps> = ({
    allColumns,
    allowColumnHiding,
    numVisibleColumns,
    resetResizing,
    setAllFilters,
    style,
}) => {
    const [optionsElement, setOptionsElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const { styles, attributes, update } = usePopper(optionsElement, popperElement, {
        placement: 'left-end',
    });

    const toggleOptions = (): void => {
        setShowOptions(!showOptions);
    };

    const onOptionSelect = (option: Item): void => {
        option.onClick();
    };

    const clickOutsideOptionsHandler = (): void => {
        if (showOptions) toggleOptions();
    };

    useOnClickOutside(popperElement, clickOutsideOptionsHandler);

    useEffect(() => {
        if (showOptions) update();
    }, [showOptions, update]);

    const resetFunctions: ListSection = useMemo(() => {
        const functions = {
            items: [
                {
                    label: 'Reset Column Widths',
                    onClick: resetResizing,
                    value: 'resetResizing',
                },
                {
                    label: 'Reset Filters',
                    onClick: () => setAllFilters([]),
                    value: 'resetFilters',
                },
            ],
            label: 'Reset',
        };
        if (allowColumnHiding) {
            functions.items.push({
                label: 'Show All Columns',
                onClick: () => {
                    allColumns.forEach((column) => {
                        if (!column.isVisible) column.toggleHidden();
                    });
                },
                value: 'showAllColumns',
            });
        }

        return functions;
    }, [resetResizing, setAllFilters, allColumns, allowColumnHiding]);

    const columnToggles: ListSection = useMemo(() => {
        return {
            items: allColumns
                .filter((column) => typeof column.Header === 'string')
                .map((column) => ({
                    label: `${column.isVisible ? 'Hide' : 'Show'} ${String(column.Header)}`,
                    onClick: () =>
                        /* Don't allow last visible column to be hidden */
                        !(column.isVisible && numVisibleColumns === 1) ? column.toggleHidden() : null,
                    value: `${column.isVisible ? 'hide' : 'show'}${String(column.Header)}`,
                })),
            label: 'Columns',
        };
    }, [allColumns, allowColumnHiding]);

    return (
        <HeaderOptions ref={setOptionsElement}>
            <HeaderOptionsIcon icon={faEllipsisV} onClick={toggleOptions} />
            {ReactDOM.createPortal(
                <OptionsDropdownList
                    {...attributes.popper}
                    isOpen={showOptions}
                    ref={setPopperElement}
                    style={{
                        ...styles.popper,

                        maxHeight: 800,
                        minWidth: 150,
                        zIndex: 9999,
                        ...style,
                    }}
                >
                    <SectionedList
                        items={allowColumnHiding ? [resetFunctions, columnToggles] : [resetFunctions]}
                        onSelect={onOptionSelect}
                    />
                </OptionsDropdownList>,
                document.body
            )}
        </HeaderOptions>
    );
};

export default OptionsMenu;
