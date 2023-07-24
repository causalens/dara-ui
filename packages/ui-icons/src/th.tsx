import { faTh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Th icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Th = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTh} {...props} />;
};

export default Th;
