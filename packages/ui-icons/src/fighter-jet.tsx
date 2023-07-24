import { faFighterJet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FighterJet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FighterJet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFighterJet} {...props} />;
};

export default FighterJet;
