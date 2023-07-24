import { faRecycle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Recycle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Recycle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRecycle} {...props} />;
};

export default Recycle;
