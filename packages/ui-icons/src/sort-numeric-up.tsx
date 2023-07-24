import { faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericUp} {...props} />;
};

export default SortNumericUp;
