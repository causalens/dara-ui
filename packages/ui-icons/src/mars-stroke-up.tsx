import { faMarsStrokeUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsStrokeUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsStrokeUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsStrokeUp} {...props} />;
};

export default MarsStrokeUp;
