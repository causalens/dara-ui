import { faPalette } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Palette icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Palette = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPalette} {...props} />;
};

export default Palette;
