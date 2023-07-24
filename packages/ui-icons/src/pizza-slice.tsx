import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PizzaSlice icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PizzaSlice = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPizzaSlice} {...props} />;
};

export default PizzaSlice;
