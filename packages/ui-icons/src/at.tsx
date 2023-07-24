import { faAt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * At icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const At = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAt} {...props} />;
};

export default At;
