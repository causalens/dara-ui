import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IdBadge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IdBadge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIdBadge} {...props} />;
};

export default IdBadge;
