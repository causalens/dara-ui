import { faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortNumericDownAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortNumericDownAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortNumericDownAlt} {...props} />;
};

export default SortNumericDownAlt;
