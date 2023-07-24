import { faToolbox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Toolbox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Toolbox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToolbox} {...props} />;
};

export default Toolbox;
