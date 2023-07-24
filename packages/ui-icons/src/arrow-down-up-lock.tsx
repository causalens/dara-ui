import { faArrowDownUpLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownUpLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownUpLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownUpLock} {...props} />;
};

export default ArrowDownUpLock;
