import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceLaugh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceLaugh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceLaugh} {...props} />;
};

export default FaceLaugh;
