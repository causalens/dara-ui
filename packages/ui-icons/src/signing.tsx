import { faSigning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Signing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Signing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSigning} {...props} />;
};

export default Signing;
