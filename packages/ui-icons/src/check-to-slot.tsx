import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CheckToSlot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CheckToSlot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheckToSlot} {...props} />;
};

export default CheckToSlot;
