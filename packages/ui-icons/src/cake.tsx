import { faCake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCake} {...props} />;
};

export default Cake;
