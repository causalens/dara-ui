import { faChildCombatant } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChildCombatant icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChildCombatant = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChildCombatant} {...props} />;
};

export default ChildCombatant;
