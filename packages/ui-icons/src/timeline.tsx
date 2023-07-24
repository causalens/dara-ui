import { faTimeline } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Timeline icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Timeline = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimeline} {...props} />;
};

export default Timeline;
