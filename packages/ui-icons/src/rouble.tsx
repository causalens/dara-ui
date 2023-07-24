import { faRouble } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rouble icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rouble = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRouble} {...props} />;
};

export default Rouble;
