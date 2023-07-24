import { faObjectUngroup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ObjectUngroup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ObjectUngroup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faObjectUngroup} {...props} />;
};

export default ObjectUngroup;
