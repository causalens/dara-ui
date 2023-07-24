import { faAnchorCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnchorCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnchorCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnchorCircleCheck} {...props} />;
};

export default AnchorCircleCheck;
