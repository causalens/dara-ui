import { faBlog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Blog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Blog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBlog} {...props} />;
};

export default Blog;
