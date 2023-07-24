import { faCompass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Compass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Compass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompass} {...props} />;
};

export default Compass;
