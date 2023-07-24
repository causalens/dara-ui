import { faPlug } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Plug icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Plug = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlug} {...props} />;
};

export default Plug;
