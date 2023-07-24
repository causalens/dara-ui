import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleMinus} {...props} />;
};

export default CircleMinus;
