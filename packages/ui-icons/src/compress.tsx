import { faCompress } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Compress icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Compress = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompress} {...props} />;
};

export default Compress;
