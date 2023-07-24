import { faAdjust } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Adjust icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Adjust = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAdjust} {...props} />;
};

export default Adjust;
