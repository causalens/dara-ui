/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useCallback, useEffect, useState } from 'react';

import styled from '@darajs/styled-components';
import { ChevronLeft, ChevronRight, Circle } from '@darajs/ui-icons';

import { CarouselItem } from '../types';

const CarouselComponent = styled.div`
    position: relative;

    overflow: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;

    max-height: 100%;
    padding: 0 0.5rem;
`;

const CarouselItemsContainer = styled.div`
    display: inline-flex;
    max-height: calc(100% - 1.625rem);
    white-space: nowrap;
    transition: transform 0.3s;
`;

const CarouselItemWrapper = styled.div`
    display: flex;
    flex: 1 0 auto;
    justify-content: center;

    width: 100%;
    min-height: 5rem;
    max-height: 100%;
`;

const CarouselIndicators = styled.div`
    display: flex;
    gap: 0.2rem;
    justify-content: center;
`;

const Button = styled.button`
    cursor: pointer;
    user-select: none;

    position: absolute;
    z-index: 3;
    top: calc(50% - 0.5rem);
    transform: translateY(-50%);

    display: flex;
    align-items: center;

    padding: 0;

    color: ${(props) => props.theme.colors.grey4};

    background-color: inherit;
    border: none;

    :hover {
        color: ${(props) => props.theme.colors.grey5};
    }
`;

interface CircleSelectProps {
    selected: boolean;
}

const CircleSelect = styled.button<CircleSelectProps>`
    cursor: pointer;
    user-select: none;

    z-index: 3;

    padding: 0;

    color: ${(props) => (props.selected ? props.theme.colors.grey4 : props.theme.colors.grey3)};

    background-color: inherit;
    border: none;

    :hover {
        color: ${(props) => props.theme.colors.grey4};
    }

    svg {
        width: 0.5rem;
        height: 0.5rem;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
`;

const TextWrapper = styled.div`
    overflow: auto;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;

    box-sizing: border-box;
    margin: 1rem 0;
    padding: 0 1.5rem;

    color: ${(props) => props.theme.colors.text};
`;

const Title = styled.div`
    display: flex;
    flex: 0 0 auto;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;

interface CarouselItemContainerProps {
    /** The items to display */
    item: CarouselItem;
}

const CarouselItemContainer = (props: CarouselItemContainerProps): JSX.Element => {
    return (
        <CarouselItemWrapper>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    padding: '0rem 1rem',
                }}
            >
                {props.item.image && (
                    <ImageWrapper>
                        <img
                            alt={props.item.imageAlt}
                            src={props.item.image}
                            style={{
                                height: props.item.imageHeight,
                                width: props.item.imageWidth,
                            }}
                        />
                    </ImageWrapper>
                )}
                {(props.item.title || props.item.subtitle) && (
                    <TextWrapper
                        style={{
                            gap: `${props.item.title && props.item.subtitle ? '0.5rem' : '0'}`,
                            maxWidth: '100%',
                            whiteSpace: 'normal',
                        }}
                    >
                        <Title>{props.item.title}</Title>
                        <span>{props.item.subtitle}</span>
                    </TextWrapper>
                )}
                {props.item.component && props.item.component}
            </div>
        </CarouselItemWrapper>
    );
};

export interface CarouselProps {
    /** Standard react className property */
    className?: string;
    /** The initial value of the carousel */
    initialValue?: number;
    /** The items to display, each should have a label and a value */
    items: Array<CarouselItem>;
    /** Callback function that is called when the value changes */
    onChange?: (value: number) => void | Promise<void>;
    /** Pass through of style property to the root element */
    style?: React.CSSProperties;
    /** The value of the carousel */
    value?: number;
}

/**
 * A simple carousel component that wraps a list of items to be displayed and animates the translation between them.
 *
 * @param {CarouselProps} props - the props of the component
 */
function Carousel(props: CarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(props.value || props.initialValue || 0);

    const updateIndex = useCallback(
        (newIndex: number): void => {
            let _newIndex = newIndex;
            if (newIndex < 0) {
                _newIndex = props.items.length - 1;
            } else if (newIndex >= props.items.length) {
                _newIndex = 0;
            }
            props.onChange?.(_newIndex);
            // uncontrolled component
            if (props.value === undefined) {
                setActiveIndex(_newIndex);
            }
        },
        [props.onChange, props.items, props.value]
    );

    useEffect(() => {
        setActiveIndex(props.value || props.initialValue || 0);
    }, [props.value]);

    return (
        <CarouselComponent className={props.className} style={props.style}>
            <Button
                data-testid="carousel-left-button"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
                style={{ left: '0.5rem' }}
                type="button"
            >
                <ChevronLeft />
            </Button>
            <CarouselItemsContainer style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {props.items.map((item, index) => {
                    return <CarouselItemContainer item={item} key={`carousel-item-${index}`} />;
                })}
            </CarouselItemsContainer>
            <Button
                data-testid="carousel-right-button"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                style={{ right: '0.5rem' }}
                type="button"
            >
                <ChevronRight />
            </Button>
            <CarouselIndicators>
                {props.items.map((item, index) => {
                    return (
                        <CircleSelect
                            key={`carousel-select-${index}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                            selected={index === activeIndex}
                            type="button"
                        >
                            <Circle />
                        </CircleSelect>
                    );
                })}
            </CarouselIndicators>
        </CarouselComponent>
    );
}

export default Carousel;
