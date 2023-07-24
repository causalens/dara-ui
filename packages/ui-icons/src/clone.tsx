import { faClone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Clone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Clone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClone} {...props} />;
};

export default Clone;
