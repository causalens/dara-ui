import { faTeletype } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Teletype icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Teletype = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTeletype} {...props} />;
};

export default Teletype;
