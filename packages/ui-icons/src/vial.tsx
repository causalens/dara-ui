import { faVial } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vial icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vial = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVial} {...props} />;
};

export default Vial;
