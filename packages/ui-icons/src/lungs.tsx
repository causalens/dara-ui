import { faLungs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Lungs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Lungs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLungs} {...props} />;
};

export default Lungs;
