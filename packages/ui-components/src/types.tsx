export type JSONData = { [k: string]: string | number | boolean | JSONData | Array<JSONData> };

export interface ItemBadge {
    color?: string;
    label: string;
}

/** Standard interface for dropdown items */
export interface Item {
    badge?: ItemBadge;
    image?: string;
    label: string;
    onClick?: () => void | Promise<void>;
    value: any;
}

export interface CarouselItem {
    component?: React.ReactNode;
    image?: string;
    imageAlt?: string;
    imageHeight?: string;
    imageWidth?: string;
    subtitle?: string;
    title?: string;
}

export interface AccordionItemType {
    badge?: ItemBadge;
    content: any;
    label: string;
}

export interface ComponentSelectItem {
    component: React.ReactNode;
    subtitle?: string;
    title: string;
}

export interface InteractiveComponentProps<T> {
    /** Pass through of className property */
    className?: string;
    /** Optional property to disable the button */
    disabled?: boolean;
    /** An error message for the component, if it is an empty string then the element is valid. */
    errorMsg?: string;
    /** The initial value of the element */
    initialValue?: T;
    /** Native react style property, can be used to fine tune the element appearance */
    style?: React.CSSProperties;
    /** An optional value field to put the component into controlled mode */
    value?: T;
}
