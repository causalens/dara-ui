/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
