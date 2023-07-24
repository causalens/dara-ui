import { faCube } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cube icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cube = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCube} {...props} />;
};

export default Cube;
