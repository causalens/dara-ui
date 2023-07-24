import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EllipsisVertical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EllipsisVertical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEllipsisVertical} {...props} />;
};

export default EllipsisVertical;
