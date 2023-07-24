import { faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FontAwesomeLogoFull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FontAwesomeLogoFull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFontAwesomeLogoFull} {...props} />;
};

export default FontAwesomeLogoFull;
