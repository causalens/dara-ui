import { faBowlRice } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BowlRice icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BowlRice = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBowlRice} {...props} />;
};

export default BowlRice;
