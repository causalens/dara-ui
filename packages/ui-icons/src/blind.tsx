import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Blind icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Blind = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBlind} {...props} />;
};

export default Blind;
