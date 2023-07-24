import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDownLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDownLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDownLong} {...props} />;
};

export default ArrowDownLong;
