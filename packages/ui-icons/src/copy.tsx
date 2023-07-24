import { faCopy } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Copy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Copy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCopy} {...props} />;
};

export default Copy;
