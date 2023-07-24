import { faQuidditch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Quidditch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Quidditch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuidditch} {...props} />;
};

export default Quidditch;
