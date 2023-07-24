import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CirclePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CirclePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCirclePlus} {...props} />;
};

export default CirclePlus;
