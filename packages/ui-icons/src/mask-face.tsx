import { faMaskFace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MaskFace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MaskFace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMaskFace} {...props} />;
};

export default MaskFace;
