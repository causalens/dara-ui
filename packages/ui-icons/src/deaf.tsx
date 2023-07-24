import { faDeaf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Deaf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Deaf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDeaf} {...props} />;
};

export default Deaf;
