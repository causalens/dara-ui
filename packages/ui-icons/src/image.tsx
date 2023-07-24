import { faImage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Image icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Image = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faImage} {...props} />;
};

export default Image;
