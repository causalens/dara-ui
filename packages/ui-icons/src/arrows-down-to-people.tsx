import { faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsDownToPeople icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsDownToPeople = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsDownToPeople} {...props} />;
};

export default ArrowsDownToPeople;
