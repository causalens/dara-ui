import { faBraille } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Braille icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Braille = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBraille} {...props} />;
};

export default Braille;
