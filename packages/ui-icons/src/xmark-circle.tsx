import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * XmarkCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const XmarkCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faXmarkCircle} {...props} />;
};

export default XmarkCircle;
