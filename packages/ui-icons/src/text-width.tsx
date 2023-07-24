import { faTextWidth } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TextWidth icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TextWidth = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTextWidth} {...props} />;
};

export default TextWidth;
