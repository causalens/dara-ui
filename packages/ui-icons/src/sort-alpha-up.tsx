import { faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaUp} {...props} />;
};

export default SortAlphaUp;
