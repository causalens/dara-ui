import { faChildDress } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChildDress icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChildDress = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChildDress} {...props} />;
};

export default ChildDress;
