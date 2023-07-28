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
