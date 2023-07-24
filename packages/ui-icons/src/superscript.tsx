import { faSuperscript } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Superscript icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Superscript = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSuperscript} {...props} />;
};

export default Superscript;
