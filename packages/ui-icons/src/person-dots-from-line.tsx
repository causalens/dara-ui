import { faPersonDotsFromLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonDotsFromLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonDotsFromLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonDotsFromLine} {...props} />;
};

export default PersonDotsFromLine;
