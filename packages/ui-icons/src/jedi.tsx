import { faJedi } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Jedi icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Jedi = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJedi} {...props} />;
};

export default Jedi;
