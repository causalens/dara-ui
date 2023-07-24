import { faTextHeight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TextHeight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TextHeight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTextHeight} {...props} />;
};

export default TextHeight;
