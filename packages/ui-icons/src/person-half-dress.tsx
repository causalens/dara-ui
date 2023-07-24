import { faPersonHalfDress } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonHalfDress icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonHalfDress = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonHalfDress} {...props} />;
};

export default PersonHalfDress;
