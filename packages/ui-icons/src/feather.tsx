import { faFeather } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Feather icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Feather = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFeather} {...props} />;
};

export default Feather;
