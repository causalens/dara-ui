import { faSchool } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * School icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const School = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSchool} {...props} />;
};

export default School;
