import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilterCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilterCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilterCircleXmark} {...props} />;
};

export default FilterCircleXmark;
