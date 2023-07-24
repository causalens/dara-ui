import { faFilterCircleDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilterCircleDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilterCircleDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilterCircleDollar} {...props} />;
};

export default FilterCircleDollar;
