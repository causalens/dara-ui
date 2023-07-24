import { faSplotch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Splotch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Splotch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSplotch} {...props} />;
};

export default Splotch;
