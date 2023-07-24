import { faAnchorCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnchorCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnchorCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnchorCircleXmark} {...props} />;
};

export default AnchorCircleXmark;
