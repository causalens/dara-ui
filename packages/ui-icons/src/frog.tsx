import { faFrog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Frog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Frog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFrog} {...props} />;
};

export default Frog;
