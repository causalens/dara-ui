import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BackwardFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BackwardFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBackwardFast} {...props} />;
};

export default BackwardFast;
