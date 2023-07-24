import { faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GroupArrowsRotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GroupArrowsRotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGroupArrowsRotate} {...props} />;
};

export default GroupArrowsRotate;
