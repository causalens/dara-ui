import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Xmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Xmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faXmark} {...props} />;
};

export default Xmark;
