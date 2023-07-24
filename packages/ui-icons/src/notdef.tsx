import { faNotdef } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Notdef icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Notdef = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNotdef} {...props} />;
};

export default Notdef;
