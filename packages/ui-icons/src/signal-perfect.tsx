import { faSignalPerfect } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignalPerfect icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignalPerfect = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignalPerfect} {...props} />;
};

export default SignalPerfect;
