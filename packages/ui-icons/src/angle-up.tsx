import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AngleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AngleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngleUp} {...props} />;
};

export default AngleUp;
