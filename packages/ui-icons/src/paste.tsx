import { faPaste } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Paste icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Paste = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaste} {...props} />;
};

export default Paste;
