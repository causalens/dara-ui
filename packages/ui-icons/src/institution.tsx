import { faInstitution } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Institution icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Institution = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInstitution} {...props} />;
};

export default Institution;
