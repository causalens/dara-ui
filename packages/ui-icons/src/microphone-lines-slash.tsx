import { faMicrophoneLinesSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MicrophoneLinesSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MicrophoneLinesSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrophoneLinesSlash} {...props} />;
};

export default MicrophoneLinesSlash;
