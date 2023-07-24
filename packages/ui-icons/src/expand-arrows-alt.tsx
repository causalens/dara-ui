import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExpandArrowsAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExpandArrowsAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExpandArrowsAlt} {...props} />;
};

export default ExpandArrowsAlt;
