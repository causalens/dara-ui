import { faJetFighter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * JetFighter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const JetFighter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJetFighter} {...props} />;
};

export default JetFighter;
