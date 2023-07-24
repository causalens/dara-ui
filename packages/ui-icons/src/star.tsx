import { faStar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Star icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Star = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStar} {...props} />;
};

export default Star;
