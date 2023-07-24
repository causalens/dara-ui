import { faMeh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Meh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Meh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMeh} {...props} />;
};

export default Meh;
