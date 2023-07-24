import { faGrinSquintTears } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinSquintTears icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinSquintTears = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinSquintTears} {...props} />;
};

export default GrinSquintTears;
