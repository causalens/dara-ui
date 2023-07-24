import { faSwatchbook } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Swatchbook icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Swatchbook = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSwatchbook} {...props} />;
};

export default Swatchbook;
