import { faArrowRightToCity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightToCity icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightToCity = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightToCity} {...props} />;
};

export default ArrowRightToCity;
