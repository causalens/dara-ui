import { faFaceLaughSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceLaughSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceLaughSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceLaughSquint} {...props} />;
};

export default FaceLaughSquint;
