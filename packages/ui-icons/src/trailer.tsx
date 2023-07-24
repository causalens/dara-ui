import { faTrailer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Trailer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Trailer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrailer} {...props} />;
};

export default Trailer;
