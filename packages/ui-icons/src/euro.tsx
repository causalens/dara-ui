import { faEuro } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Euro icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Euro = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEuro} {...props} />;
};

export default Euro;
