import { faDog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDog} {...props} />;
};

export default Dog;
