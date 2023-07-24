import { faCommenting } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Commenting icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Commenting = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommenting} {...props} />;
};

export default Commenting;
