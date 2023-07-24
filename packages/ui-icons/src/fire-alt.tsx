import { faFireAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FireAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FireAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFireAlt} {...props} />;
};

export default FireAlt;
