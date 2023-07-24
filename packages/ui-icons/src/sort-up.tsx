import { faSortUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SortUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SortUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSortUp} {...props} />;
};

export default SortUp;
