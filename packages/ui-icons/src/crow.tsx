import { faCrow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Crow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Crow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCrow} {...props} />;
};

export default Crow;
