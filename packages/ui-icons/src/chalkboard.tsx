import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Chalkboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Chalkboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChalkboard} {...props} />;
};

export default Chalkboard;
