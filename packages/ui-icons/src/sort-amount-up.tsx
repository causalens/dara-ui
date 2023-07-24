import { faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountUp} {...props} />;
};

export default SortAmountUp;
