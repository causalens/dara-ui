import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortAmountUpAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortAmountUpAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortAmountUpAlt} {...props} />;
};

export default SortAmountUpAlt;
