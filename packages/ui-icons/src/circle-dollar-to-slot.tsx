import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleDollarToSlot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleDollarToSlot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleDollarToSlot} {...props} />;
};

export default CircleDollarToSlot;
