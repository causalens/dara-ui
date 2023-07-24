import { faPlugCircleMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCircleMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCircleMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCircleMinus} {...props} />;
};

export default PlugCircleMinus;
