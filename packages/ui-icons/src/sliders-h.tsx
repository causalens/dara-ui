import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SlidersH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SlidersH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSlidersH} {...props} />;
};

export default SlidersH;
