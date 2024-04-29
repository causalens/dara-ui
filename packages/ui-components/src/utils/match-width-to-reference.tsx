import { type ElementRects, type Elements, Middleware, size } from '@floating-ui/react';

const matchWidthToReference = (): Middleware =>
    size({
        apply({ rects, elements }: { rects: ElementRects; elements: Elements }) {
            Object.assign(elements.floating.style, {
                width: `${rects.reference.width}px`,
            });
        },
    });

export default matchWidthToReference;
