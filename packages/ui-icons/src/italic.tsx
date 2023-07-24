import { faItalic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Italic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Italic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faItalic} {...props} />;
};

export default Italic;
