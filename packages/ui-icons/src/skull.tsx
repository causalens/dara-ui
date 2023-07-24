import { faSkull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Skull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Skull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSkull} {...props} />;
};

export default Skull;
