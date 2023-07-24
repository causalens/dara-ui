import { faSmog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Smog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Smog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSmog} {...props} />;
};

export default Smog;
