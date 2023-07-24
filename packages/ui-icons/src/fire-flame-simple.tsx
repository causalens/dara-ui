import { faFireFlameSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FireFlameSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FireFlameSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFireFlameSimple} {...props} />;
};

export default FireFlameSimple;
