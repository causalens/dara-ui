import { faTelevision } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Television icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Television = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTelevision} {...props} />;
};

export default Television;
