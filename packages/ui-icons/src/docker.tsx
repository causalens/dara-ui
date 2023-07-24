import { faDocker } from '@fortawesome/free-brands-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * A Docker icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Docker = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDocker} {...props} />;
};

export default Docker;
