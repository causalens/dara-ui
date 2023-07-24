import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownAZ icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownAZ = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownAZ} {...props} />;
};

export default ArrowDownAZ;
