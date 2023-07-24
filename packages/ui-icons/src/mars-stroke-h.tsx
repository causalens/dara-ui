import { faMarsStrokeH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsStrokeH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsStrokeH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsStrokeH} {...props} />;
};

export default MarsStrokeH;
