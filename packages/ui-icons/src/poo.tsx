import { faPoo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Poo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Poo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPoo} {...props} />;
};

export default Poo;
