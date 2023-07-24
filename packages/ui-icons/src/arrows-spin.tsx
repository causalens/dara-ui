import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsSpin icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsSpin = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsSpin} {...props} />;
};

export default ArrowsSpin;
