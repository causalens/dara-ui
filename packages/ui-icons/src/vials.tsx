import { faVials } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vials icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vials = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVials} {...props} />;
};

export default Vials;
