import { faPersonDress } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonDress icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonDress = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonDress} {...props} />;
};

export default PersonDress;
