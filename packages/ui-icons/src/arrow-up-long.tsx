import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpLong} {...props} />;
};

export default ArrowUpLong;
