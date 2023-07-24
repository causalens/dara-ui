import { faWorm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Worm icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Worm = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWorm} {...props} />;
};

export default Worm;
