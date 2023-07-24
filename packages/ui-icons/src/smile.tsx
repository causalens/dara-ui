import { faSmile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Smile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Smile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmile} {...props} />;
};

export default Smile;
