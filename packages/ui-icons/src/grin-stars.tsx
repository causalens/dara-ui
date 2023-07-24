import { faGrinStars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinStars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinStars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinStars} {...props} />;
};

export default GrinStars;
