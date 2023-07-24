import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IdCardClip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IdCardClip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIdCardClip} {...props} />;
};

export default IdCardClip;
