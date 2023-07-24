import { faSadCry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SadCry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SadCry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSadCry} {...props} />;
};

export default SadCry;
