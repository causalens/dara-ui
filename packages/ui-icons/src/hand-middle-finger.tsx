import { faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandMiddleFinger icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandMiddleFinger = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandMiddleFinger} {...props} />;
};

export default HandMiddleFinger;
