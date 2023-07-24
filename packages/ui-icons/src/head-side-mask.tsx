import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadSideMask icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadSideMask = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadSideMask} {...props} />;
};

export default HeadSideMask;
