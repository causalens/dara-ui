import { faPersonBooth } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonBooth icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonBooth = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonBooth} {...props} />;
};

export default PersonBooth;
