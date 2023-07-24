import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAlphaDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAlphaDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAlphaDown} {...props} />;
};

export default SortAlphaDown;
