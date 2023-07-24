import { faToiletPortable } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToiletPortable icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToiletPortable = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToiletPortable} {...props} />;
};

export default ToiletPortable;
