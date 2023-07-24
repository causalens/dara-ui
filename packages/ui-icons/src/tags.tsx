import { faTags } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tags icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tags = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTags} {...props} />;
};

export default Tags;
