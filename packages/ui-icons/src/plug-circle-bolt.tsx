import { faPlugCircleBolt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCircleBolt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCircleBolt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCircleBolt} {...props} />;
};

export default PlugCircleBolt;
