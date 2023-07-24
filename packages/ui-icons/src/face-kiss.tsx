import { faFaceKiss } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceKiss icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceKiss = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceKiss} {...props} />;
};

export default FaceKiss;
