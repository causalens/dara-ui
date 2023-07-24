import { faToiletsPortable } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToiletsPortable icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToiletsPortable = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToiletsPortable} {...props} />;
};

export default ToiletsPortable;
