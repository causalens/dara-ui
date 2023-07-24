import { faHeadSideCough } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadSideCough icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadSideCough = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadSideCough} {...props} />;
};

export default HeadSideCough;
