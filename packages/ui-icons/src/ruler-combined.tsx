import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RulerCombined icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RulerCombined = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRulerCombined} {...props} />;
};

export default RulerCombined;
