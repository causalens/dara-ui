import { faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UpDownLeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UpDownLeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpDownLeftRight} {...props} />;
};

export default UpDownLeftRight;
