import { faCancel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cancel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cancel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCancel} {...props} />;
};

export default Cancel;
