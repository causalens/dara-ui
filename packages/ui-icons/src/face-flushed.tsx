import { faFaceFlushed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceFlushed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceFlushed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceFlushed} {...props} />;
};

export default FaceFlushed;
