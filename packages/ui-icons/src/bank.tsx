import { faBank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBank} {...props} />;
};

export default Bank;
