import { faHiking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hiking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hiking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHiking} {...props} />;
};

export default Hiking;
