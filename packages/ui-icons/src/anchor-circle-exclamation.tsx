import { faAnchorCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AnchorCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AnchorCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnchorCircleExclamation} {...props} />;
};

export default AnchorCircleExclamation;
