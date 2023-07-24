import { faGlasses } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Glasses icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Glasses = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlasses} {...props} />;
};

export default Glasses;
