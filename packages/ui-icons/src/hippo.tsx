import { faHippo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hippo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hippo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHippo} {...props} />;
};

export default Hippo;
