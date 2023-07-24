import { faTv } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tv icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tv = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTv} {...props} />;
};

export default Tv;
