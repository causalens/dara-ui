import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SackDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SackDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSackDollar} {...props} />;
};

export default SackDollar;
