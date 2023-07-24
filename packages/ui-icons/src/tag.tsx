import { faTag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTag} {...props} />;
};

export default Tag;
