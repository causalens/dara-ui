import { faBucket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bucket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bucket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBucket} {...props} />;
};

export default Bucket;
