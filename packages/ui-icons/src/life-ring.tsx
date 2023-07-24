import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LifeRing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LifeRing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLifeRing} {...props} />;
};

export default LifeRing;
