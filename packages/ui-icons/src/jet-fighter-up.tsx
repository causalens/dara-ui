import { faJetFighterUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * JetFighterUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const JetFighterUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJetFighterUp} {...props} />;
};

export default JetFighterUp;
