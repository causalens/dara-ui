import { faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCirclePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCirclePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCirclePlus} {...props} />;
};

export default PlugCirclePlus;
