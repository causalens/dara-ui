import { faTarp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tarp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tarp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTarp} {...props} />;
};

export default Tarp;
