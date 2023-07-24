import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FontAwesome icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FontAwesome = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFontAwesome} {...props} />;
};

export default FontAwesome;
