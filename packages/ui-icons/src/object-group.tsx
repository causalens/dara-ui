import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ObjectGroup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ObjectGroup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faObjectGroup} {...props} />;
};

export default ObjectGroup;
