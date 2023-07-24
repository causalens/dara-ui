import { faTooth } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tooth icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tooth = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTooth} {...props} />;
};

export default Tooth;
