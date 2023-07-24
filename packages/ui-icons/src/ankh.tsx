import { faAnkh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ankh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ankh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAnkh} {...props} />;
};

export default Ankh;
