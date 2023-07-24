import { faRunning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Running icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Running = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRunning} {...props} />;
};

export default Running;
