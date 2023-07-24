import { faStamp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stamp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stamp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStamp} {...props} />;
};

export default Stamp;
