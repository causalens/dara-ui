import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider, theme } from '@darajs/styled-components';

import Switch, { SwitchProps } from './switch';

function RenderSwitch(props: SwitchProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Switch {...props} />
        </ThemeProvider>
    );
}

describe('Switch Test', () => {
    it('should display correctly', () => {
        const { getByTestId } = render(<RenderSwitch />);
        getByTestId('handle');
        expect(getByTestId('wrapper').textContent).toBe('OFF');
    });

    it('should respect initialValue', () => {
        const { getByTestId } = render(<RenderSwitch initialValue />);
        expect(getByTestId('wrapper').textContent).toBe('ON');
    });

    it('should call onChange in controlled mode', () => {
        const onChangeStub = jest.fn();
        const { getByTestId, rerender } = render(
            <RenderSwitch labels={{ off: 'disabled', on: 'enabled' }} onChange={onChangeStub} value />
        );

        const wrapper = getByTestId('wrapper');
        expect(wrapper.textContent).toBe('enabled');
        userEvent.click(wrapper);

        expect(onChangeStub).toHaveBeenCalledWith(false);
        expect(wrapper.textContent).toBe('enabled');

        // changing the value prop should update the switch state on rerender
        rerender(<RenderSwitch labels={{ off: 'disabled', on: 'enabled' }} onChange={onChangeStub} value={false} />);
        expect(wrapper.textContent).toBe('disabled');
    });
});
