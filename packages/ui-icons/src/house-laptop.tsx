import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseLaptop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseLaptop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseLaptop} {...props} />;
};

export default HouseLaptop;
