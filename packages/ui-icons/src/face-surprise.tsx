import { faFaceSurprise } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSurprise icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSurprise = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSurprise} {...props} />;
};

export default FaceSurprise;
