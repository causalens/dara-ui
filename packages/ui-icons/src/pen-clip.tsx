import { faPenClip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenClip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenClip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenClip} {...props} />;
};

export default PenClip;
