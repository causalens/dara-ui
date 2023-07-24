import { faGrinTears } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinTears icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinTears = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinTears} {...props} />;
};

export default GrinTears;
