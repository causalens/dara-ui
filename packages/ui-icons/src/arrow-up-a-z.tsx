import { faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpAZ icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpAZ = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpAZ} {...props} />;
};

export default ArrowUpAZ;
