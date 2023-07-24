import { faHeadSideCoughSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadSideCoughSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadSideCoughSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadSideCoughSlash} {...props} />;
};

export default HeadSideCoughSlash;
