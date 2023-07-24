import { faM } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charM icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charM = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faM} {...props} />;
};

export default charM;
