import { faHeading } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Heading icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Heading = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeading} {...props} />;
};

export default Heading;
