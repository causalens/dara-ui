import { faBus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBus} {...props} />;
};

export default Bus;
