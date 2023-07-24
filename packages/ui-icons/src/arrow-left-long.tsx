import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowLeftLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowLeftLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowLeftLong} {...props} />;
};

export default ArrowLeftLong;
