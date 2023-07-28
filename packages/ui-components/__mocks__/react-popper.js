export function usePopper() {
    return {
        update: jest.fn,
        attributes: {
            popper: {},
        },
        styles: {
            popper: {},
        },
    };
}
