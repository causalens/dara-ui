import { faWarning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Warning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Warning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWarning} {...props} />;
};

export default Warning;
