import { faMousePointer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MousePointer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MousePointer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMousePointer} {...props} />;
};

export default MousePointer;
