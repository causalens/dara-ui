import { faFaceMehBlank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceMehBlank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceMehBlank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceMehBlank} {...props} />;
};

export default FaceMehBlank;
