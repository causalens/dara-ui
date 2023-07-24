import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleDown} {...props} />;
};

export default AngleDown;
