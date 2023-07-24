import { faDigging } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Digging icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Digging = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDigging} {...props} />;
};

export default Digging;
