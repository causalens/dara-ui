import { faForwardFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ForwardFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ForwardFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faForwardFast} {...props} />;
};

export default ForwardFast;
