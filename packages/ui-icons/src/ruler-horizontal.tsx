import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RulerHorizontal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RulerHorizontal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRulerHorizontal} {...props} />;
};

export default RulerHorizontal;
