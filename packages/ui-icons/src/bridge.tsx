import { faBridge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bridge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bridge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridge} {...props} />;
};

export default Bridge;
