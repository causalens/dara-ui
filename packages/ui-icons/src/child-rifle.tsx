import { faChildRifle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChildRifle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChildRifle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChildRifle} {...props} />;
};

export default ChildRifle;
