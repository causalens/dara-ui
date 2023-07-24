import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceLaughWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceLaughWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceLaughWink} {...props} />;
};

export default FaceLaughWink;
