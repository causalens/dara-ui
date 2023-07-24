import { Modifier, ModifierArguments, Options } from '@popperjs/core';

/**
 * A modifier for popper js that auto sizes the content of the popper to be the same as the reference element.
 */
const sameWidthModifier: Modifier<string, Options> = {
    effect:
        ({ state }: any) =>
        () => {
            state.elements.popper.style.width = `${state.elements.reference.offsetWidth as string}px`;
        },
    enabled: true,
    fn: ({ state }: ModifierArguments<Options>) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    name: 'sameWidth',
    phase: 'beforeWrite',
    requires: ['computeStyles'],
};

export default sameWidthModifier;
