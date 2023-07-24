import { faSackXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SackXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SackXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSackXmark} {...props} />;
};

export default SackXmark;
