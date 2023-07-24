import { faMarsStrokeV } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsStrokeV icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsStrokeV = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsStrokeV} {...props} />;
};

export default MarsStrokeV;
