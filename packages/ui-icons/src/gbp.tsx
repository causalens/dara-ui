import { faGbp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gbp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gbp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGbp} {...props} />;
};

export default Gbp;
