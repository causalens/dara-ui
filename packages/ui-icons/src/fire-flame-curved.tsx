import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FireFlameCurved icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FireFlameCurved = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFireFlameCurved} {...props} />;
};

export default FireFlameCurved;
