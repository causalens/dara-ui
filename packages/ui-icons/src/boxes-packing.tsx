import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoxesPacking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoxesPacking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoxesPacking} {...props} />;
};

export default BoxesPacking;
