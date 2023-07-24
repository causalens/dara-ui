import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceFrown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceFrown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceFrown} {...props} />;
};

export default FaceFrown;
