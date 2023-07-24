import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Exclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Exclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExclamation} {...props} />;
};

export default Exclamation;
