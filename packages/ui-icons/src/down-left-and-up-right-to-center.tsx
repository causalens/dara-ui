import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DownLeftAndUpRightToCenter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DownLeftAndUpRightToCenter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDownLeftAndUpRightToCenter} {...props} />;
};

export default DownLeftAndUpRightToCenter;
