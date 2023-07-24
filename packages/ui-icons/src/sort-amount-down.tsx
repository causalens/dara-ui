import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountDown} {...props} />;
};

export default SortAmountDown;
