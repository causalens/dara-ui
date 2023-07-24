import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thumbtack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thumbtack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThumbtack} {...props} />;
};

export default Thumbtack;
