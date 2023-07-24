import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePhoneFlip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePhoneFlip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePhoneFlip} {...props} />;
};

export default SquarePhoneFlip;
