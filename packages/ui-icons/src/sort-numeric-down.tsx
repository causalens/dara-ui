import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericDown} {...props} />;
};

export default SortNumericDown;
