import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShoePrints icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShoePrints = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShoePrints} {...props} />;
};

export default ShoePrints;
