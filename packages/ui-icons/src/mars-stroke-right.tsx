import { faMarsStrokeRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsStrokeRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsStrokeRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsStrokeRight} {...props} />;
};

export default MarsStrokeRight;
