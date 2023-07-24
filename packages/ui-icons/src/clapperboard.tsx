import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Clapperboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Clapperboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClapperboard} {...props} />;
};

export default Clapperboard;
